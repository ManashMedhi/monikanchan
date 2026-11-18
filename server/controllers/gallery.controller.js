
import { randomUUID } from "node:crypto";
import path from "node:path";
import { fileTypeFromBuffer } from "file-type";

import { GalleryItem } from "../models/gallery.model.js";

import {
  deleteObject,
  getObjectUrl,
  uploadObject,
} from "../libs/s3.js";

const ALLOWED_IMAGE_TYPES = new Map([
  ["image/jpeg", "jpg"],
  ["image/png", "png"],
  ["image/webp", "webp"],
]);

// Convert a MongoDB gallery item into API response data.
async function serializeItem(item) {
  const result = {
    id: item._id,
    type: item.type,
    title: item.title,
    description: item.description,
    createdAt: item.createdAt,
  };

  if (item.type === "photo") {
    result.url = await getObjectUrl(item.s3Key);
  }

  if (item.type === "video") {
    result.videoId = item.videoId;
  }

  return result;
}

// Extract a valid YouTube video ID.
function parseYouTubeId(input) {
  if (typeof input !== "string" || input.length > 500) {
    return null;
  }

  try {
    const url = new URL(input.trim());

    const host = url.hostname
      .toLowerCase()
      .replace(/^www\./, "");

    let id = null;

    if (host === "youtu.be") {
      id = url.pathname.split("/").filter(Boolean)[0];
    } else if (
      host === "youtube.com" ||
      host === "m.youtube.com"
    ) {
      if (url.pathname === "/watch") {
        id = url.searchParams.get("v");
      } else if (
        /^\/(embed|shorts|live)\//.test(url.pathname)
      ) {
        id = url.pathname.split("/").filter(Boolean)[1];
      }
    }

    return id && /^[A-Za-z0-9_-]{11}$/.test(id)
      ? id
      : null;
  } catch {
    return null;
  }
}

// Clean user-provided text.
function cleanText(value, maxLength) {
  return typeof value === "string"
    ? value.trim().slice(0, maxLength)
    : "";
}

// Public gallery API.
export async function getGallery(req, res, next) {
  try {
    const type = req.query.type;

    if (type && !["photo", "video"].includes(type)) {
      return res.status(400).json({
        message: "Type must be photo or video.",
      });
    }

    const page = Math.max(
      1,
      Number.parseInt(req.query.page || "1", 10) || 1
    );

    const limit = Math.min(
      100,
      Math.max(
        1,
        Number.parseInt(req.query.limit || "50", 10) || 50
      )
    );

    const filter = type ? { type } : {};

    const [items, total] = await Promise.all([
      GalleryItem.find(filter)
        .sort({ createdAt: -1, _id: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .lean(),

      GalleryItem.countDocuments(filter),
    ]);

    // Generate fresh temporary URLs for photo items.
    const serializedItems = await Promise.all(
      items.map((item) => serializeItem(item))
    );

    return res.status(200).json({
      items: serializedItems,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    next(error);
  }
}

// Upload photos to private S3.
export async function uploadPhotos(req, res, next) {
  const uploadedKeys = [];

  try {
    if (!Array.isArray(req.files) || req.files.length === 0) {
      return res.status(400).json({
        message: "Select at least one image.",
      });
    }

    const titlePrefix = cleanText(req.body?.title, 100);
    const description = cleanText(req.body?.description, 500);

    const records = [];

    for (let index = 0; index < req.files.length; index += 1) {
      const file = req.files[index];

      // Verify the actual file signature.
      const detected = await fileTypeFromBuffer(file.buffer);

      const extension =
        detected && ALLOWED_IMAGE_TYPES.get(detected.mime);

      if (!detected || !extension) {
        throw Object.assign(
          new Error(
            "Only genuine JPG, PNG, or WebP image files are allowed."
          ),
          { statusCode: 400 }
        );
      }

      const key = `gallery/photos/${randomUUID()}.${extension}`;

      await uploadObject({
        key,
        body: file.buffer,
        contentType: detected.mime,
      });

      uploadedKeys.push(key);

      const originalBase = path.basename(
        file.originalname || "Photo",
        path.extname(file.originalname || "")
      );

      const title = titlePrefix
        ? (
            req.files.length === 1
              ? titlePrefix
              : `${titlePrefix} ${index + 1}`
          )
        : cleanText(
            originalBase.replace(/[_-]+/g, " "),
            120
          ) || `Gallery photo ${index + 1}`;

      records.push({
        type: "photo",
        title,
        description,
        s3Key: key,
        createdBy: req.admin._id,
      });
    }

    const saved = await GalleryItem.insertMany(
      records,
      { ordered: true }
    );

    const serializedItems = await Promise.all(
      saved.map((item) => serializeItem(item))
    );

    return res.status(201).json({
      items: serializedItems,
    });
  } catch (error) {
    // Clean up uploaded S3 files if the operation fails.
    await Promise.allSettled(
      uploadedKeys.map((key) => deleteObject(key))
    );

    next(error);
  }
}

// Add a YouTube video.
export async function addYouTubeVideo(req, res, next) {
  try {
    const title = cleanText(req.body?.title, 120);

    const description = cleanText(
      req.body?.description,
      500
    );

    const videoId = parseYouTubeId(req.body?.url);

    if (!title) {
      return res.status(400).json({
        message: "Video title is required.",
      });
    }

    if (!videoId) {
      return res.status(400).json({
        message: "Enter a valid YouTube video URL.",
      });
    }

    const item = await GalleryItem.create({
      type: "video",
      title,
      description,
      videoId,
      createdBy: req.admin._id,
    });

    return res.status(201).json({
      item: await serializeItem(item),
    });
  } catch (error) {
    next(error);
  }
}

// Delete a gallery item.
export async function deleteGalleryItem(req, res, next) {
  try {
    const { id } = req.params;

    if (!/^[a-f\d]{24}$/i.test(id)) {
      return res.status(400).json({
        message: "Invalid gallery item ID.",
      });
    }

    const item = await GalleryItem.findById(id);

    if (!item) {
      return res.status(404).json({
        message: "Gallery item not found.",
      });
    }

    if (item.type === "photo" && item.s3Key) {
      await deleteObject(item.s3Key);
    }

    await item.deleteOne();

    return res.status(200).json({
      message: "Gallery item deleted.",
    });
  } catch (error) {
    next(error);
  }
}
