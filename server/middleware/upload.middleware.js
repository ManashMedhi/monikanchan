
import multer from "multer";

export const photoUpload = multer({
  storage: multer.memoryStorage(),

  limits: {
    fileSize: 5 * 1024 * 1024,
    files: 5,
    fields: 2,
    fieldSize: 2 * 1024,
    parts: 7,
  },
}).array("photos", 5);
