
import jwt from "jsonwebtoken";
import { Admin } from "../models/admin.model.js";

export async function authenticateAdmin(req, res, next) {
  try {
    const token = req.cookies?.admin_token;

    if (!token) {
      return res.status(401).json({
        message: "Authentication required.",
      });
    }

    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET,
      {
        algorithms: ["HS256"],
        issuer: "monikanchan-api",
        audience: "monikanchan-admin",
      }
    );

    const admin = await Admin.findById(payload.sub)
      .select("name email role isActive");

    if (
      !admin ||
      !admin.isActive ||
      admin.role !== "admin"
    ) {
      return res.status(401).json({
        message: "Authentication required.",
      });
    }

    req.admin = admin;

    next();
  } catch {
    return res.status(401).json({
      message: "Session expired. Please log in again.",
    });
  }
}

export function requireAdmin(req, res, next) {
  if (!req.admin || req.admin.role !== "admin") {
    return res.status(403).json({
      message: "Administrator access required.",
    });
  }

  next();
}
