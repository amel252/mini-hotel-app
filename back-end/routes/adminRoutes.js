// Les private routes sont des routes protégées, accessibles uniquement aux utilisateurs authentifiés.Seuls les utilisateurs avec un JWT valide peuvent accéder

import express from "express";
import passport from "passport";
import middlewareAdmin from "../middleware/middlewareAdmin.js";
import { getUsers } from "../controllers/userController.js";
import { getRooms } from "../controllers/roomController.js";
const router = express.Router();

// Toutes les routes de ce router nécessitent un JWT valide et un admin
router.use(passport.authenticate("jwt", { session: false }));
router.use(middlewareAdmin);

// Route dashboard landing
router.get(
    "/",
    passport.authenticate("jwt", { session: false }), // vérifie le token
    middlewareAdmin, // verifie admin
    (req, res) => {
        res.json({
            message: "Access admin autorised",
            user: req.user,
        });
    }
);
// Liste des utilisateurs
router.get("/users", getUsers);

// Liste des rooms
router.get("/rooms", getRooms);

export default router;
