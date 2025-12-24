import express from "express";
import passport from "passport";
import { signup } from "../controllers/authController.js";

const router = express.Router();

router.post(
    "/signup",
    passport.authenticate("signup", { session: false }),
    signup
);

export default router;
