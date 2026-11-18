
import mongoose from "mongoose";

   const connectDB = async ()=>{
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is missing.");
  }

  await mongoose.connect(uri, {
    autoIndex: process.env.NODE_ENV !== "production",
    serverSelectionTimeoutMS: 10000,
  });

  console.log("MongoDB connected successfully.");
}

export default connectDB;
