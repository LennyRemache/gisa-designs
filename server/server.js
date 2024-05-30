import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

import tempRoute from "./routes/temp.js";

const port = process.env.PORT || 5001;

const app = express(); // initiatilzing express server side application

app.use(cors()); // allows to make api calls from the client side

app.use("/", tempRoute);

app.listen(port, () => {
  console.log(`Server started successfully on port : ${port}`);
});
