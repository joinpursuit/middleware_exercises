const express = require("express");
const app = express();
const queueFunction = require('./functionFile.js')

app.get('/queue/:path', queueFunction.handleQueue, (req, res) => {})

app.listen(8000, () => {
    console.log("this is port 8000");
});