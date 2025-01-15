import express from "express";

const app = express();


app.get("/", (req, res) => {
    res.json(({message: "Server is running"}))
})

export default app;