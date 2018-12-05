const express = require("express");
const app = express();
const port = 3000;
const isAnimalModule = require("./modules/animal.js");
const generateSpreadModule = require("./modules/randomNumber.js");
const handleQueueModule = require("./modules/queue.js")

app.get("/animal/:animalType", isAnimalModule.checkIsAnimal, (req, res) => {
  res.send({ status: "success", message: res.result });
});

app.get('/random', generateSpreadModule.checkGenerateSpread, (req, res) => {
  let values = Object.values(req.query);
  let numValues = values.map(el=> +el);
  res.send({status: "success", range: numValues, randPick: res.randomNumber});
});


app.get('/queue/:type', handleQueueModule.checkHandleQueue, (req, res) => {
  res.json({ status: "success", data: res.result });
})

app.listen(port, () => {
  console.log(`You are listening to port ${port}`);
});
