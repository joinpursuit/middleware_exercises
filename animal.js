const express = require('express');
const app = express();
const port = 8000;

const animalObj = {
  zebra: 'zebra', 
  tiger: 'tiger', 
  lion: 'lion',
  cat: 'cat',
  dog: 'dog'
};

const isAnimal = (req, res, next) => {
  let animalChoice = req.params.animalChoice;
  let animalList = Object.values(animalObj);
  if (animalList.includes(animalChoice)) {
    res.animals = {
      status: 'success',
      message: true
    }
  } else {
    res.animals = {
      status: 'failure',
      message: false
    }
  }
  next();
}

app.get('/animal/:animalChoice', isAnimal, (req, res) => {
  res.json(res.animals);
})

app.listen(port, () => {
  console.log("Middleware is listening to PORT 8000.");
})