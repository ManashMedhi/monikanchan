
import { Router } from "express";
import { rateLimit } from "express-rate-limit";

import {
  addYouTubeVideo,
  deleteGalleryItem,
  getGallery,
  uploadPhotos,
} from "../controllers/gallery.controller.js";

import {
  authenticateAdmin,
  requireAdmin,
} from "../middleware/auth.middleware.js";

import {
  requireAllowedOrigin,
} from "../middleware/origin.middleware.js";

import {
  photoUpload,
} from "../middleware/upload.middleware.js";

const router = Router();

const uploadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 20,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    message: "Upload limit reached. Try again later.",
  },
});

const contentLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 40,
  standardHeaders: "draft-8",
  legacyHeaders: false,
});

// Public gallery
router.get("/", getGallery);

// Protected photo upload
router.post(
  "/photos",
  requireAllowedOrigin,
  authenticateAdmin,
  requireAdmin,
  uploadLimiter,
  photoUpload,
  uploadPhotos
);

// Protected YouTube video addition
router.post(
  "/videos",
  requireAllowedOrigin,
  authenticateAdmin,
  requireAdmin,
  contentLimiter,
  addYouTubeVideo
);

// Protected deletion
router.delete(
  "/:id",
  requireAllowedOrigin,
  authenticateAdmin,
  requireAdmin,
  contentLimiter,
  deleteGalleryItem
);

export default router;
