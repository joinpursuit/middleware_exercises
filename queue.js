const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("port 1234 is working")
})

let nameArr = ['xavier', 'michelle', 'corey', 'reed']
let myObj = {
  status: "success", data: "reed"
}

const handleQueue = (req, res, next) => {

}

app.get('/queue/:command', handleQueue, (req, res) => {
  res.json(myObj)
})

app.listen(1234, () => {
  console.log("You are listening to port 1234")
})
