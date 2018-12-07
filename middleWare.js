const express = require('express')
const animals = require('./animals.js')
const random = require('./random.js')
const queue = require('./queue.js')
const app = express()


const thisObj = animals.display
const animalChoice = animals.animal

const randomObj = random.display
const randomChoice = random.generateSpread

const queueObj = queue.obj
const queueChoice = queue.queueHandler


// app.get('/animal/:animalType', animalChoice, (req, res) => {
//   res.json(thisObj)
// })

// app.get('/random', randomChoice, (req, res) => {
//   res.json(randomObj)
// })

app.get('/queue/:choice', queueChoice, (req, res) => {
  res.json(queueObj)
})

app.listen(3000, () => {
  console.log("Server is succesful");
})
