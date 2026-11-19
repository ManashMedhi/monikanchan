
import cors from "cors";

const allowedOrigins = (process.env.FRONTEND_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim().replace(/\/$/, ""))
  .filter(Boolean);

if (allowedOrigins.length === 0) {
  throw new Error("FRONTEND_ORIGINS must contain at least one allowed origin.");
}

// CORS configuration
const corsOrigin = (origin, callback) => {
  // CORS does not apply to requests without an Origin header.
  if (!origin) {
    return callback(null, false);
  }

  if (allowedOrigins.includes(origin)) {
    return callback(null, true);
  }

  return callback(new Error("CORS origin not allowed"));
};
// Additional protection for browser requests
const requireAllowedOrigin = (req, res, next) => {
  const origin = req.get("Origin");

  if (!origin || !allowedOrigins.includes(origin)) {
    return res.status(403).json({
      message: "Request origin is not allowed",
    });
  }

  next();
};

export { corsOrigin, requireAllowedOrigin };
