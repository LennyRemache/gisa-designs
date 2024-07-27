import Request from "../db/models/request.js";

// Receive new customer request info from client-side
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

    const savedRequest = await newRequest.save(); // save the new request into the DB
    res.status(201).json(savedRequest); // signal that request has be received successfully
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
};
