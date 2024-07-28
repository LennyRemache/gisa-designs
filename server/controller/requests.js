import { Request } from "../db/models/request.js";
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
    const newRequest = new Request({
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

    const savedRequest = await newRequest.save(); // save the new request into the DB;
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
      replyTo: email,
      from: "lenny.j.remache@gmail.com",
      to: "lenny.j.remache@gmail.com",
      subject: `Order Request #${savedRequest._id}`,
      text: "This is a test email sent from a Node.js app!",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(201).json(savedRequest); // signal that request has be received successfully
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
