import { Order } from "../db/models/order.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Receive new customer request info from client-side and save to db and email it
export const request = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      services,
      date,
      address,
      city,
      state,
      zip,
      budget,
      link,
      message,
    } = req.body;

    // using the created Request db model we now can use client-side info to create a new request object with the given info
    const newOrder = new Order({
      firstName,
      lastName,
      email,
      phone,
      services,
      date,
      address,
      city,
      state,
      zip,
      budget,
      link,
      message,
    });

    const savedOrder = await newOrder.save(); // save the new request into the DB;
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email provider
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    const mailOptions = {
      replyTo: savedOrder.email,
      from: "lenny.j.remache@gmail.com",
      to: "lenny.j.remache@gmail.com",
      subject: `Order Request #${savedOrder._id}`,
      html: `<p>Name: ${savedOrder.firstName} ${savedOrder.lastName}</p>
             <p>Email: ${savedOrder.email}</p>
             <p>Phone: ${savedOrder.phone}</p>
             <p>Address: ${savedOrder.address} ${savedOrder.city}, ${savedOrder.state} ${savedOrder.zip}</p>
             <p>Requested Date: ${savedOrder.date}</p>
             <p>Budget: ${savedOrder.budget}</p>
             <p>Pinterest: ${savedOrder.link}</p>
             <p>${savedOrder.message}</p>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(201).json(savedOrder); // signal that request has be received successfully
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
