import express from "express";
import {
    getTest,
    postTest,
    addRoom,
    getRooms,
    getRoomById,
} from "../controllers/roomControllers.js";
import { catchErrors } from "../helpers.js";

const router = express.Router();

router.get("/", getTest);
router.post("/test", postTest);
router.post("/add-room", catchErrors(addRoom));
router.get("/get-rooms", catchErrors(getRooms));
router.get("/get-room/:id", catchErrors(getRoomById));

export default router;
