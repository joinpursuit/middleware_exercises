const axios = require("axios");
const express = require("express");
const app = express();
const ani = require('./animal.js');
const rand = require('./random.js');
const queue = require('./queue.js')

app.get('/animal/:animalType', ani.isAnimal, (req, res) => {
  res.json(res.message)
})

app.get('/random/', rand.generateSpread, (req, res) => {
  res.json(res.message)
})
app.get('/queue/:wild', queue.handleQueue, (req, res) => {
  res.json(res.something)
})

app.listen(3000, (req, res) => {
  console.log("You are listening to port 3000 on midware.js");
});