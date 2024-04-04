import mongoose from "mongoose";

let connected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (connected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: "share_prompt" });
    connected = true;
  } catch (error) {
    console.log("MongoDB connection error: ", error);
  }
};
