import express from "express";
import { request } from "../controller/requests";

const router = express.Router();

router.post("/request", request);

export default router;
