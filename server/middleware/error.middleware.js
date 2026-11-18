
import mongoose from "mongoose";
import multer from "multer";

export function notFound(req, res) {
  return res.status(404).json({
    message: "Route not found.",
  });
}

export function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  console.error(
    "API error:",
    err?.name || "Error",
    err?.message || "Unknown error"
  );

  if (err instanceof multer.MulterError) {
    const message =
      err.code === "LIMIT_FILE_SIZE"
        ? "Each image must be 5 MB or smaller."
        : "Too many files or upload fields. You can upload up to 5 images at a time.";

    return res.status(400).json({ message });
  }

  if (mongoose.Error.ValidationError &&
      err instanceof mongoose.Error.ValidationError) {
    return res.status(400).json({
      message: "The submitted data is invalid.",
    });
  }

  if (err?.code === 11000) {
    return res.status(409).json({
      message: "This record already exists.",
    });
  }

  if (err?.message === "CORS_ORIGIN_DENIED") {
    return res.status(403).json({
      message: "This website origin is not allowed.",
    });
  }

  if (
    Number.isInteger(err?.statusCode) &&
    err.statusCode >= 400 &&
    err.statusCode < 500
  ) {
    return res.status(err.statusCode).json({
      message: err.message || "Invalid request.",
    });
  }

  return res.status(500).json({
    message: "Something went wrong. Please try again.",
  });
}
