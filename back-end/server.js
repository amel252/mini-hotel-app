import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import "./config/passport.js";
import passport from "passport";

import authRoutes from "./routes/authRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const PORT = process.env.PORT || 3200;

//instancié express
const app = express();
// initialisé passport
app.use(passport.initialize());

// parametrer notre server pour lire json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Autoriser toutes les origines (localhost:5173 ici)
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true, // si tu utilises cookies / auth
    })
);
// connextion mongoDb
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB est connecté ✅"))
    .catch((err) => console.error("Erreur de connexion MongoDB ❌", err));

// login / register / logout
app.use("/api/auth", authRoutes);
// CRUD rooms (public / admin selon besoin)
app.use("/api/rooms", roomRoutes);

//// GET all users

// Routes admin sécurisées
// Toutes les routes de adminRoutes passent par passport JWT et middleware admin
app.use(
    "/admin",
    passport.authenticate("jwt", { session: false }),
    adminRoutes
);

app.listen(PORT, () => {
    console.log(`Le server est lancé sur le port : ${PORT}`);
});
