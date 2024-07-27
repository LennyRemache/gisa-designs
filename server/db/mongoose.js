import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

// function to connect server side app to our mongoDB database
export const Connect = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
};
