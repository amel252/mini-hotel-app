import express from "express";
import mongoose from "mongoose";
import "./config/passport.js";
import passport from "passport";

import authRoutes from "./routes/authRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3200;

//instancié express
const app = express();
// initialisé passport
app.use(passport.initialize());

// parametrer notre server pour lire json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connextion mongoDb
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB est connecté ✅"))
    .catch((err) => console.error("Erreur de connexion MongoDB ❌", err));

app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);

app.listen(PORT, () => {
    console.log(`Le server est lancé sur le port : ${PORT}`);
});
