const express = require("express");
const queueFunction = require('./functionFile.js')
const app = express();
//peek, enqueue,dequeue

// let userQueue = ["xavier", "michelle", "corey", "reed"];
// const handleQueue = (req, res, next) => {
//   let path = req.params.path;
//   let namesQ = Object.values(req.query);
//   let userAsAString = namesQ.toString();
//   // let popped;
//
//   if (path.toLowerCase() === "enqueue") {
//     userQueue.unshift(userAsAString);
//     res.json({ status: "success", enqueued: userAsAString });
//   } else if (path.toLowerCase() === "dequeue") {
//     console.log(userQueue, "deyvi :)");
//     let popped = userQueue.pop();
//
//     console.log(userQueue);
//     res.json({ status: "success", dequeued: popped });
//     console.log(userQueue, "deyvi 2");
//   } else if (path.toLowerCase() === "peek") {
//     let peek = userQueue[userQueue.length - 1];
//     res.json({ status: "success", data: peek });
//   } else {
//     console.log("bvalid path");
//   }
//   // console.log(userQueue,"this");
//   // })
// };

app.get("/queue/:path", queueFunction.handleQueue, (req, res) => {});

app.listen(8000, () => {
  console.log("this is port 8000");
});
