const express = require('express');
const app = express();
const smthElse = require('./isAnimal.js')

let myObj = smthElse.obj;
const isAnimal = smthElse.isAnimal;

app.get("/", (req, res) => {
  res.send("things are running")
})

app.get('/animal/:animal', isAnimal, (req, res) => {
  res.json(myObj)
})

app.get('/*', (req, res) => {
  res.send("Please follow the prescribed path! http://localhost:3000/animal/[animal name] ")
})

app.listen(3000, () => {
  console.log("You are listening to the one and only - PORT 3000!!!")
})
