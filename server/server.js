import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Connect } from "./db/mongoose.js";
import requestRoutes from "./routes/requests.js";
dotenv.config();

const port = process.env.PORT || 5001;

const app = express(); // initiatilzing express server side application
// connecting server to the database
Connect(); // needed when recieving data from front-end into the back-end that will be pushed into the db vice versa

// needed to fix error where post request body is undefined and causes validationError
app.use(express.json());
app.use(cors()); // allows to make api calls from the client side

/* ROUTES */
app.use("/contact", requestRoutes);

app.listen(port, () => {
  console.log(`Server started successfully on port : ${port}`);
});
