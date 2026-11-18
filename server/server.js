import "dotenv/config";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { rateLimit } from "express-rate-limit";

import connectDB from "./libs/db.js";

import { corsOrigin } from "./middleware/origin.middleware.js";

import { errorHandler, notFound } from "./middleware/error.middleware.js";

import adminAuthRoutes from "./routes/adminAuth.routes.js";
import galleryRoutes from "./routes/gallery.routes.js";

// Validate environment before starting.
// function validateEnvironment() {
//   const required = [
//     "MONGODB_URI",
//     "JWT_SECRET",
//     "FRONTEND_ORIGINS",
//     "AWS_REGION",
//     "AWS_S3_BUCKET",
//     "CLOUDFRONT_DOMAIN",
//   ];

//   for (const name of required) {
//     if (!process.env[name]) {
//       throw new Error(`${name} is required.`);
//     }
//   }

//   if (process.env.JWT_SECRET.length < 32) {
//     throw new Error("JWT_SECRET must contain at least 32 characters.");
//   }
// }




function validateEnvironment() {
  const required = [
    "MONGODB_URI",
    "JWT_SECRET",
    "FRONTEND_ORIGINS",
    "AWS_REGION",
    "AWS_S3_BUCKET",
  ];

  for (const name of required) {
    if (!process.env[name]) {
      throw new Error(`${name} is required.`);
    }
  }

  if (process.env.JWT_SECRET.length < 32) {
    throw new Error("JWT_SECRET must contain at least 32 characters.");
  }
}

validateEnvironment();

const app = express();

app.disable("x-powered-by");

if (process.env.TRUST_PROXY === "1") {
  app.set("trust proxy", 1);
}

// Security headers
app.use(helmet());

// CORS
app.use(
  cors({
    origin: corsOrigin,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "X-Requested-With"],
    maxAge: 600,
  }),
);

// Request parsing
app.use(express.json({ limit: "20kb" }));

app.use(
  express.urlencoded({
    extended: false,
    limit: "10kb",
  }),
);

app.use(cookieParser());

// General API rate limit
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 300,
  standardHeaders: "draft-8",
  legacyHeaders: false,
});

app.use("/api", apiLimiter);

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});

// API routes
app.use("/api/admin/auth", adminAuthRoutes);

app.use("/api/gallery", galleryRoutes);

// Error handling
app.use(notFound);
app.use(errorHandler);

const port = Number(process.env.PORT || 5000);

async function start() {
  await connectDB();

  app.listen(port, "0.0.0.0", () => {
    console.log(`Monikanchan API listening on port ${port}.`);
  });
}

start().catch((error) => {
  console.error("Server startup failed:", error.message);

  process.exit(1);
});
