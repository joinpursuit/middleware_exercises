const express = require('express');
const app = express();
const port = 3200;

let arrayQueue = ['xavier', 'michelle', 'corey', 'reed']

const handleQueue = (req, res, next) => {
  res.status = "success";
  if (req.params.parameter === "peek") {
    res.data = arrayQueue[arrayQueue.length - 1]
    // localhost:3000/queue/peek
  } else if (req.params.parameter === "enqueue") {
    res.data = arrayQueue.unshift(req.query.name)
    // console.log(arrayQueue);
    // localhost:3000/queue/enqueue?name=elle
  } else if (req.params.parameter === "dequeue") {
    if (!arrayQueue.length) {
      res.status = "failure";
      res.message = "The queue is empty."
      res.data = arrayQueue.pop()
    } else {
      res.data = arrayQueue.pop()
    }
    console.log(arrayQueue);
    // localhost:3000/queue/dequeue
  }
  next();
}

const finalFunction = (req, res) => {
  if (req.params.parameter === "peek") {
    res.json({
      status: res.status, data: res.data
    })
  } else if (req.params.parameter === "enqueue") {
    res.json({
      status: res.status, enqueued: req.query.name
    })
  } else if (req.params.parameter === "dequeue") {
    if (!arrayQueue.length) {
      res.json({
        status: res.status, dequeued: res.data, message: res.message
      })
    } else {
      res.json({
        status: res.status, dequeued: res.data
      })
    }
  }
}

const error = (req, res) => {
  res.json({message: "4️⃣0️⃣4️⃣"})
}
app.get('/queue/:parameter', handleQueue, finalFunction)
app.get('/*', error);

app.listen(port, () => {
  console.log("Port: ", port);
})
