import express from "express";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3200;
//instancié express
const app = express();

// app.get("/", (req, res) => {
//     res.send("hello world");
// });

app.listen(PORT, () => {
    console.log(`Le server est lancé sur le port : ${PORT}`);
});
