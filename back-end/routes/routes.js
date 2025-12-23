import express from "express";
import passport from "passport";
import {
    addRoom,
    getRooms,
    getRoomById,
    updateRoom,
    deleteRoom,
} from "../controllers/roomController.js";
import { catchErrors } from "../helpers.js";

const router = express.Router();

//  routes pour Rooms
router.post("/api/rooms", addRoom); // Créer une chambre
router.get("/api/rooms", catchErrors(getRooms)); // obtenir toute les chambres
router.get("/api/rooms/:id", catchErrors(getRoomById)); // Obtenir une chambre
router.patch("/api/rooms/:id", catchErrors(updateRoom)); // Mettre à jour partiellement
router.put("/api/rooms/:id", catchErrors(updateRoom)); // Mettre à jour une chambre
router.delete("/api/rooms/:id", catchErrors(deleteRoom)); // Supprimer une chambre

//  routes pour authentification
router.post(
    "/api/auth/signup",
    passport.authenticate("signup", { session: false }),
    async (req, res, next) => {
        res.json({
            message: "Signup ok",
            user: req.user,
        });
    }
);

export default router;
