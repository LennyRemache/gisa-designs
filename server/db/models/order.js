import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const orderSchema = new mongoose.Schema(
  {
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    email: { type: String, default: "" },
    phone: { type: String, default: "" },
    services: { type: [String], default: [] },
    date: { type: String, default: "" },
    address: { type: String, default: "" },
    city: { type: String, default: "" },
    state: { type: String, default: "" },
    zip: { type: String, default: "" },
    budget: { type: String, default: "" },
    link: { type: String, default: "" },
    message: { type: String, default: "" },
  },
  { collection: "request", timestamps: true }
);

const connection = mongoose.createConnection(`${process.env.MONGO_URL}orders`);
export const Order = connection.model("Request", orderSchema);
