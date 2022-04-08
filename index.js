const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send("<h1>Hello Beautiful World 💕</h1>")
});

app.listen(4000, () => {
    console.log("Server running on PORT 4000")
});