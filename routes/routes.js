import express from "express";
import { getTest, postTest, addRoom } from "../controllers/roomControllers.js";

const router = express.Router();

router.get("/", getTest);
router.post("/test", postTest);
router.post("/add-room", addRoom);

export default router;
