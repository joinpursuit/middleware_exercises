const express = require('express');
const middleware = require('./middleware.js');
const app = express();

const isAnimal = middleware.isAnimal;
let result = middleware.result;

app.get('/animal/:animal', isAnimal, (req, res) => {
  result.message = true;
  res.json(result);
});

app.listen(3000, () => {
  console.log('You are listening to the one and only port 3000!');
});
