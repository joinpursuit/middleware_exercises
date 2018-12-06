const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const animalCheck = require('./animal.js')
const app = express();



app.get('/animal/:animalName', animalCheck, (req, res) => {
  let obj = {}
  obj.status = "success"
  obj.message = false;

  res.json(obj)
})


app.listen(2001, () => {
  console.log("you are doing homework 4 and listening to port 2001")
})
