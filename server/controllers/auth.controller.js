
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Admin } from "../models/admin.model.js";

const COOKIE_NAME = "admin_token";
const SESSION_MS = 7 * 24 * 60 * 60 * 1000;
const SESSION_DURATION = "7d";

function cookieOptions() {
  const sameSite = (
    process.env.COOKIE_SAME_SITE ||
    (process.env.NODE_ENV === "production" ? "none" : "lax")
  ).toLowerCase();

  if (!["lax", "strict", "none"].includes(sameSite)) {
    throw new Error(
      "COOKIE_SAME_SITE must be lax, strict, or none."
    );
  }

  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite,
    path: "/",
    maxAge: SESSION_MS,
  };
}

function publicAdmin(admin) {
  return {
    id: admin._id,
    name: admin.name,
    email: admin.email,
    role: admin.role,
  };
}

export async function login(req, res, next) {
  try {
    const email =
      typeof req.body?.email === "string"
        ? req.body.email.trim().toLowerCase()
        : "";

    const password =
      typeof req.body?.password === "string"
        ? req.body.password
        : "";

    if (
      !email ||
      !password ||
      email.length > 254 ||
      password.length > 200
    ) {
      return res.status(400).json({
        message: "Enter a valid email and password.",
      });
    }

    const admin = await Admin.findOne({ email })
      .select("+passwordHash");

    if (!admin || !admin.isActive) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const passwordMatches = await bcrypt.compare(
      password,
      admin.passwordHash
    );

    if (!passwordMatches) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    const token = jwt.sign(
      { role: "admin" },
      process.env.JWT_SECRET,
      {
        subject: admin.id,
        expiresIn: SESSION_DURATION,
        issuer: "monikanchan-api",
        audience: "monikanchan-admin",
        algorithm: "HS256",
      }
    );

    admin.lastLoginAt = new Date();
    await admin.save();

    // Set cookie with SameSite=None for cross-site communication (Vercel -> Render)
    res.cookie(COOKIE_NAME, token, cookieOptions());

    return res.status(200).json({
      message: "Login successful.",
      admin: publicAdmin(admin),
    });
  } catch (error) {
    next(error);
  }
}

export function getSession(req, res) {
  return res.status(200).json({
    admin: publicAdmin(req.admin),
  });
}

export function logout(_req, res) {
  const options = cookieOptions();

  // Ensure SameSite is set for cross-site cookies
  if (typeof options.sameSite === "string") {
    options.sameSite = "none";
  }

  delete options.maxAge;

  res.clearCookie(COOKIE_NAME, options);

  return res.status(200).json({
    message: "Logged out successfully.",
  });
}
