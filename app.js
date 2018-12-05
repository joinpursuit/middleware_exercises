const express = require('express');
const animals = require('./animal.js');
const random = require('./random.js');
const q = require('./queue.js')
const app = express();



app.get('/animal/:name', animals.isAnimal, (req, res) => {

  res.json({
    status: "success",
    message: res.boolean
  })

})

app.get('/random', random.generateSpread, (req, res) => {
  console.log(res.arrayRange);
  let result = {
    status: "success",
    range: [+req.query.floor, +req.query.ceil],
    randPick: res.arrayRange[Math.floor(Math.random()*res.arrayRange.length)]
  };
  res.json(result);
})

app.get('/queue/:oper', q.handleQueue, (req, res) => {
  let output = {
    status: "success",
  }
  let oper = req.params.oper;
  switch (oper) {
    case "peek":
      output.data = res.data;
      break;
    case "enqueue":
      output.enqueued = res.enqueued;
      break;
    case "dequeue":
      output.dequeued = res.dequeued;
      break;
  }
  res.json(output);
})

app.listen(3000, () => {
  console.log("listening to port 3000");
})
