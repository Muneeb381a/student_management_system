import express from "express";


const app = express();

const port = 5500;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
})

app.get("/", (req, res) => {
    res.json({message: "Server is running"})
})