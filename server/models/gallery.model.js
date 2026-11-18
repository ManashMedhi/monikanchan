
import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["photo", "video"],
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      maxlength: 120,
    },

    description: {
      type: String,
      trim: true,
      maxlength: 500,
      default: "",
    },

    // Store the S3 key, not a public S3 URL.
    s3Key: {
      type: String,
      default: null,
    },

    // YouTube video ID.
    videoId: {
      type: String,
      default: null,
      match: /^[A-Za-z0-9_-]{11}$/,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  { timestamps: true }
);

gallerySchema.index({ createdAt: -1 });
gallerySchema.index({ type: 1, createdAt: -1 });

gallerySchema.pre("validate", function validateMedia() {
  if (this.type === "photo" && !this.s3Key) {
    this.invalidate("s3Key", "An S3 key is required for photos.");
  }

  if (this.type === "video" && !this.videoId) {
    this.invalidate(
      "videoId",
      "A valid YouTube video ID is required for videos."
    );
  }
});

export const GalleryItem = mongoose.model(
  "GalleryItem",
  gallerySchema
);
