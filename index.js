const express = require("express");

const app = express();
const PORT = 3000;

//Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Node Task API running" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


