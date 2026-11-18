
const allowedOrigins = new Set(
  (process.env.FRONTEND_ORIGINS || "")
    .split(",")
    .map((value) => value.trim().replace(/\/$/, ""))
    .filter(Boolean)
);

export function corsOrigin(origin, callback) {
  if (!origin || allowedOrigins.has(origin)) {
    return callback(null, true);
  }

  return callback(new Error("CORS_ORIGIN_DENIED"));
}

// Extra protection for browser requests that modify data.
export function requireAllowedOrigin(req, res, next) {
  const origin = req.get("Origin");

  if (!origin || !allowedOrigins.has(origin)) {
    return res.status(403).json({
      message: "Request origin is not allowed.",
    });
  }

  next();
}
