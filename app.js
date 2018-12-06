const express = require('express');
const animals = require('./animals.js')
const random = require('./random.js')
const queue = require('./queue.js')
const app = express();

const esAnimal = animals.isAnimal;
const myObj = animals.obj;

const randObj = random.obj;
const generateSpread = random.generateSpread;

const handleQueue = queue.handleQueue;
const queueObj = queue.obj;

app.get('/animal/:animal', esAnimal, (req, res) => {
  myObj.message = true;
  res.json(myObj);
});

app.get('/random/', generateSpread, (req, res) => {
  res.json(randObj);
});

app.get('/queue/:option/', handleQueue, (req, res) => {
  res.json(queueObj);
});

app.get('/*', (req, res) => {
 res.send("Please use the prescribed path! ")
})

app.listen(3000, () => {
  console.log("You are listening to port 3000");
});
