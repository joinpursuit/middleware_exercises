const express = require('express');
const queueFunction = require('./expressApp.js');
const app = express();
const port = 8000;

// const handleQueue = (req, res, next) => {
//   const manager = req.params.manager;
//   if (manager === 'peek') {
//     if (nameArr.length > 0) {
//       res.queue = {
//         status: 'success',
//         data: nameArr[nameArr.length - 1]
//      }
//     } else {
//       res.queue = {
//         status: 'failure',
//         message: 'This is an empty Array!'
//       }
//     }
//   } else if (manager === 'enqueue') {
//     const query = req.query;
//     const value = Object.values(query).toString();
//     nameArr.unshift(value);
//     res.queue = {
//       status: 'success',
//       enqueued: value,
//       nameArr: nameArr
//     }
//   } else if (manager === 'dequeue') {
//     if (nameArr.length > 0) {
//       res.queue = {
//         status: 'success',
//         dequeued: nameArr[nameArr.length - 1],
//         nameArr: nameArr.slice(0, nameArr.length - 1)
//       }
//     } else {
//       res.queue = {
//         status: 'failure',
//         message: 'This is an empty Array!'
//       }
//     }
//   } else {
//     res.queue = {
//       status: 'failure',
//       message: 'Invalid input!'
//     }
//   }
//   next();
// }no

app.get('/queue/:manager', queueFunction.handleQueue, (req, res) => {
  res.json(res.queue);
})

app.listen(port, () => {
  console.log('Queue is listening to PORT 8000.');
})