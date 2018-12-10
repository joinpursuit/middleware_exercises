const express = require('express');
const app = express();
const port = 3100;

const generateSpread = (req, res, next) => {
  res.input1 = parseInt(req.query.floor);
  res.input2 = parseInt(req.query.ceil);
  res.range = [res.input1, res.input2];
  res.status = "success";
  Math.ceil(res.input1);
  Math.floor(res.input2);
  res.randomChoice = Math.floor(Math.random() * (res.input2 - res.input1 + 1)) + res.input1;

  next();
}
//http://localhost:3100/random?floor=4&ceil=5

const finalFunction = (req, res) => {
  res.json({status: res.status, range: res.range, randPick: res.randomChoice})
}

const error = (req, res) => {
  res.json({message: `💋 Ooooh, no. That's a 4️⃣0️⃣4️⃣. What are we going to do about that?`})
}

app.get('/random', generateSpread, finalFunction)
app.get('/*', error)

app.listen(port, () => {
  console.log("Listening to the port: ", port);
})
