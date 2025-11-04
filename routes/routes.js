import express from "express";
import { getTest, postTest, addRoom } from "../controllers/roomControllers.js";
import { catchErrors } from "../helpers.js";

const router = express.Router();

router.get("/", getTest);
router.post("/test", postTest);
router.post("/add-room", catchErrors(addRoom));

export default router;
