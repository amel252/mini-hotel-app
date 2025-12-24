import express from "express";
import {
    addRoom,
    getRooms,
    getRoomById,
    updateRoom,
    deleteRoom,
} from "../controllers/roomController.js";
import { catchErrors } from "../helpers.js";

const router = express.Router();

// Routes pour les rooms
router.post("/", addRoom); // POST /api/rooms
router.get("/", catchErrors(getRooms)); // GET /api/rooms
router.get("/:id", catchErrors(getRoomById)); // GET /api/rooms/:id
router.patch("/:id", catchErrors(updateRoom)); // PATCH /api/rooms/:id
router.put("/:id", catchErrors(updateRoom)); // PUT /api/rooms/:id
router.delete("/:id", catchErrors(deleteRoom)); // DELETE /api/rooms/:id

export default router;
