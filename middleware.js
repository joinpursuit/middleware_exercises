const axios = require("axios");
const express = require("express");
const animal = require("./animalTester.js");
const random = require("./random.js");
const queuehandle = require("./handleq.js");
const app = express();

app.get("/animal/:type", animal.isAnimal, (req, res) => {
  res.json(res.sender);
});

app.get("/random/", random.generateSpread, (req, res) => {
  res.json(res.sender);
});

app.get("/queue", queuehandle.functionChooser, (req, res) => {
  res.json(res.sender);
});





app.listen(3000, () => {
  console.log("listening to port 3000");
});
