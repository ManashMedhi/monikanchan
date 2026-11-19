
import { Router } from "express";
import { rateLimit } from "express-rate-limit";

import {
  getSession,
  login,
  logout,
} from "../controllers/auth.controller.js";

import {
  authenticateAdmin,
} from "../middleware/auth.middleware.js";

import {
  requireAllowedOrigin,
} from "../middleware/origin.middleware.js";

const router = Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    message: "Too many login attempts. Try again in 15 minutes.",
  },
});

// Admin login
router.post(
  "/login",
  requireAllowedOrigin,
  loginLimiter,
  login
);

// Check current admin session
router.get(
  "/me",
  authenticateAdmin,
  getSession
);

// Admin logout
router.post(
  "/logout",
  requireAllowedOrigin,
  logout
);

export default router;
