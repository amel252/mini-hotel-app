import express from "express";
import {
    addRoom,
    getRooms,
    getRoomById,
    updateRoom,
    deleteRoom,
} from "../controllers/roomControllers.js";
import { catchErrors } from "../helpers.js";

const router = express.Router();

router.post("/api/rooms", addRoom); // Créer une chambre
router.get("/api/rooms", catchErrors(getRooms)); // obtenir toute les chambres
router.get("/api/rooms/:id", catchErrors(getRoomById)); // Obtenir une chambre
router.patch("/api/rooms/:id", catchErrors(updateRoom)); // Mettre à jour partiellement
router.put("/api/rooms/:id", catchErrors(updateRoom)); // Mettre à jour une chambre
router.delete("/api/rooms/:id", catchErrors(deleteRoom)); // Supprimer une chambre

export default router;
