const express = require('express');
const app = express();
const port = 3000;

app.use('/assets', express.static('public/assets'));

const finalFunction = (req, res) => {
  // res.json(res);
  res.sendFile(__dirname + '/public/index.html');
};

const listening = () => (console.log(`listening on port: ${port}
localhost:${port}`));

app.get('/', finalFunction);

app.listen(port, listening);
