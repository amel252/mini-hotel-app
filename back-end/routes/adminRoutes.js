// Les private routes sont des routes protégées, accessibles uniquement aux utilisateurs authentifiés.Seuls les utilisateurs avec un JWT valide peuvent accéder

import express from "express";
import passport from "passport";
import middlewareAdmin from "../middleware/middlewareAdmin.js";


const router = express.Router();

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
export default router;
