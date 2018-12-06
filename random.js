const express = require("express");
const randomFunction = require('./functionFile.js')
const app = express();



// const generateSpread = (req, res, next) => {
//   let floor = parseInt(req.query.floor);
//   let ceil = parseInt(req.query.ceil);
//   let output = [];
//   let random = Math.floor(Math.random() * ceil);
//
//   if (floor > ceil || floor === ceil || isNaN(floor) || isNaN(ceil)) {
//     res.send("please enter valid nums and lowest to greatest pls");
//   }
//
//   for (let i = floor; i <= ceil; i++) {
//     output.push(i);
//   }
//   let RandomPicker = output[random]
//
//   res.json({
//     status: "success",
//     range: [floor, ceil],
//     randPick: RandomPicker
//   });
// };

app.get("/random/", randomFunction.generateSpread, (req, res) => {
  
});

app.listen(8000, () => {
  console.log("this is port 8000");
});
