import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes.js";
// import user from "./controllers/authController.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3200;

//instancié express
const app = express();

// parametrer notre server pour lire json
app.use(express.json());

// connextion mongoDb
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB est connecté ✅"))
    .catch((err) => console.error("Erreur de connexion MongoDB ❌", err));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Le server est lancé sur le port : ${PORT}`);
});
