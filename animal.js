const express = require("express");
const app = express();
const animalFunction = require("./functionFile.js")

app.get("/animal", animalFunction.animalCheck, (req, res) => {
    res.json(req.query);
});

app.get("/isAnimal", animalFunction.animalCheck, (req, res) => {
    res.json({
        status: "failure",
        message: false
    });
});

app.listen(8000, () => {
    console.log("you are listening to port 8000");
});