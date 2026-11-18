
import "dotenv/config";

import bcrypt from "bcryptjs";
import mongoose from "mongoose";

import connectDB from "../libs/db.js";
import { Admin } from "../models/admin.model.js";

const adminInputs = [1, 2, 3].map((number) => ({
  oldEmail: process.env[`ADMIN_${number}_OLD_EMAIL`]
    ?.trim()
    .toLowerCase(),

  newEmail: process.env[`ADMIN_${number}_EMAIL`]
    ?.trim()
    .toLowerCase(),

  newPassword: process.env[`ADMIN_${number}_PASSWORD`],
}));

async function updateAdmins() {
  try {
    // Validate environment variables
    if (
      adminInputs.some(
        (admin) =>
          !admin.oldEmail ||
          !admin.newEmail ||
          !admin.newPassword
      )
    ) {
      throw new Error("All old emails, new emails and passwords are required.");
    }

    if (
      adminInputs.some(
        (admin) => admin.newPassword.length < 14
      )
    ) {
      throw new Error("Each new password must be at least 14 characters.");
    }

    const oldEmails = adminInputs.map((admin) => admin.oldEmail);
    const newEmails = adminInputs.map((admin) => admin.newEmail);

    if (
      new Set(oldEmails).size !== 3 ||
      new Set(newEmails).size !== 3
    ) {
      throw new Error("All old and new email addresses must be different.");
    }

    await connectDB();

    // Find all three existing admin accounts
    const admins = [];

    for (const input of adminInputs) {
      const admin = await Admin.findOne({
        email: input.oldEmail,
      });

      if (!admin) {
        throw new Error(`Existing admin not found: ${input.oldEmail}`);
      }

      admins.push(admin);
    }

    // Check whether any new email is already used
    for (const input of adminInputs) {
      const existing = await Admin.findOne({
        email: input.newEmail,
        _id: { $nin: admins.map((admin) => admin._id) },
      });

      if (existing) {
        throw new Error(`New email is already registered: ${input.newEmail}`);
      }
    }

    // Update all three accounts
    for (let i = 0; i < admins.length; i++) {
      const admin = admins[i];
      const input = adminInputs[i];

      admin.email = input.newEmail;
      admin.passwordHash = await bcrypt.hash(
        input.newPassword,
        12
      );

      await admin.save();

      console.log(`Updated admin: ${input.newEmail}`);
    }

    console.log("All three admin accounts updated successfully.");

  } catch (error) {
    console.error("Admin update failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

updateAdmins();
