const express = require('express');
const app = express();
const thisThing = require('./rndmfnctn.js')

let resultObj = thisThing.resultObj;
const generateSpread = thisThing.generateSpread;


app.get('/', (req, res) => {
  res.send("port 7000")
})

app.get('/random/', generateSpread, (req, res) =>{
  res.json(resultObj)
})

app.listen(7000, () => {
  console.log("You are listening to port 7000")
})
