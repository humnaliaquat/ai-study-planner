import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/aiplanner"
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
  }
};