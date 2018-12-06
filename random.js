const express = require('express');
const spread = require('./spread.js');
const app = express();

const generateSpread = spread.generateSpread;
let result = spread.result;

app.get('/random/', generateSpread, (req, res) => {
  res.json(result);
});

app.listen(4000, () => {
  console.log('You are tuning into port 4000!');
});
