const express = require("express");
const app = express();
const randomFunction = require("./functionFile.js")

app.get("/random/", randomFunction.generateSpread, (req, res) => {});

app.listen(8000, () => {
    console.log("this is port 8000");
});