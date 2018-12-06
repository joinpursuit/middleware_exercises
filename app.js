const express = require('express');
const app = express();
const port = 3000;
const animal = require('./routes/animal');
const random = require('./routes/random');
const queue = require('./routes/queue');

console.log(queue);
app.use('/assets', express.static('public/assets'));

const endRoute = (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
};

const listening = () => {
  console.log(`listening on port: ${port}
localhost:${port}`);
};

const errMsg = (req, res) => {
  let err = '404 error';
  res.json({
    message: err,
  });
  console.log(err);
};

app.get('/', endRoute);
app.get('/animal/:animal', animal.isAnimal, animal.endAnimalRoute);
app.get('/random', random.generateSpread, random.endRandomRoute);
app.get('/queue/:method', queue.handleQueue);
app.get('*', errMsg);

app.listen(port, listening);
