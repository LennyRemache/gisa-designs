import express from "express";
import { request } from "../controller/requests.js";

const router = express.Router();

router.post("/request", request);

export default router;
