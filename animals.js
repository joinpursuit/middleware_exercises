const express = require('express');
const app = express();
const isAnimal = require('./allFuncs.js');

app.get('/animal/:choice', isAnimal.animalPresent, (req, res) => {
  if (res.input === true) {
    console.log(res);
    res.json({ status: 'success', message: true });
  } else {
    res.json({ status: 'success', message: false });
  }
});

app.listen(4000, () => {
  console.log('You are listening to port 4000!');
});
