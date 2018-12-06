const express = require("express");
const app = express();

//peek, enqueue, dequeue
// let result = { status: 'success', data: 'insert name here' };
//
// const handleQueue = (req, res, next) => {
//   let urlArr = ['peek', 'enqueue', 'dequeue'];
// };
let peopleArr = ["ariel", "erick", "abed", "jhenya", "samantha", "john"];

app.get("/queue/:option", (req, res) => {
  let path = req.params.option;
  let popped;

  if (path === "dequeue") {
    peopleArr.pop();
  } else if (path === "enqueue") {
    peopleArr.unshift(req.query.enqueue.name);
  } else if (path === "peek") {
  }
});

app.listen(5000, () => {
  console.log("You are channeling into port 5000!");
});
