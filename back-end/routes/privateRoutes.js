import express from "express";
import passport from "passport";
const router = express.Router();

router.get(
    "/user",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        res.json({
            message: "Accès autorisé",
            user: req.user,
        });
    }
);
export default router;
