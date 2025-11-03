import express from "express";

const PORT = 3400;
//instancié express
const app = express();

// app.get("/", (req, res) => {
//     res.send("hello world");
// });

app.listen(PORT, () => {
    console.log(`Le server est lacé sur le port : ${PORT}`);
});
