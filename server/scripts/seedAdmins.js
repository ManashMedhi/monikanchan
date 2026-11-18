
import "dotenv/config";

import bcrypt from "bcryptjs";
import mongoose from "mongoose";

import  connectDB  from "../libs/db.js";
import { Admin } from "../models/admin.model.js";

const adminInputs = [1, 2, 3].map((number) => ({
  name: process.env[`ADMIN_${number}_NAME`]?.trim(),
  email: process.env[`ADMIN_${number}_EMAIL`]
    ?.trim()
    .toLowerCase(),
  password: process.env[`ADMIN_${number}_PASSWORD`],
}));

async function seedAdmins() {
  const emails = adminInputs.map((admin) => admin.email);

  if (
    adminInputs.some(
      (admin) =>
        !admin.name ||
        !admin.email ||
        !admin.password
    )
  ) {
    throw new Error(
      "All three ADMIN_n_NAME, ADMIN_n_EMAIL and ADMIN_n_PASSWORD values are required."
    );
  }

  if (new Set(emails).size !== 3) {
    throw new Error(
      "The three admin email addresses must be different."
    );
  }

  if (
    adminInputs.some(
      (admin) => admin.password.length < 14
    )
  ) {
    throw new Error(
      "Each admin password must be at least 14 characters long."
    );
  }

  await connectDB();

  await Admin.createIndexes();

  for (const adminInput of adminInputs) {
    const passwordHash = await bcrypt.hash(
      adminInput.password,
      12
    );

    await Admin.findOneAndUpdate(
      { email: adminInput.email },
      {
        $set: {
          name: adminInput.name,
          passwordHash,
          role: "admin",
          isActive: true,
        },
      },
      {
        upsert: true,
        new: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      }
    );

    console.log(`Seeded admin: ${adminInput.email}`);
  }

  console.log("All three admin accounts are ready.");
}

seedAdmins()
  .catch((error) => {
    console.error(
      "Admin seeding failed:",
      error.message
    );

    process.exitCode = 1;
  })
  .finally(async () => {
    await mongoose.disconnect();
  });
