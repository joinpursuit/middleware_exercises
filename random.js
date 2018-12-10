const express = require("express");
const randomRange = require("./allFuncs.js");
const app = express();
const port = 3000;

app.get("/random", randomRange.generateSpread, (req, res) => {
  console.log(req.query.ceil);
  res.json({
    status: "sucess",
    range: [req.query.floor, req.query.ceil],
    randPick: res.randNum
  });
});

app.listen(port, () => {
  console.log("you are listening to port 3000");
});
