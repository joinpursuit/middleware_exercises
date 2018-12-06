const express = require('express');
const app = express();
const port = 8000;

const generateSpread = (req, res, next) => {

  let floor = parseInt(req.query.floor);
  let ceil = parseInt(req.query.ceil);
  
  if (floor < ceil) {
    let range = [];
      let temp = floor
      while(temp < ceil) {
        range.push(temp);
        temp++;
      }
    
      let randomIdx = Math.floor(Math.random() * range.length);
    
      res.randoms = {
        status: 'success',
        range: [parseInt(floor), parseInt(ceil)],
        randPick: range[randomIdx]
      }
  } else {
    res.randoms = {
      status: 'failure',
      messages: 'Both Floor and Ceil should be integer and Floor should be smalller. Please type-in correctly.'
    };
  }
  next();
}

app.get('/random', generateSpread, (req, res) => {
  res.json(res.randoms);
})

app.listen(port, () => {
  console.log('Random is listening to Port 8000.')
})