const express = require('express');
const app = express();
//------------------------------------
let animalList = ["zebra", "tiger", "lion", "goat"]
//------------------------------------
const animalSearch = (req, res, next) => {
  res.status = "failure";
  res.message = false;

  animalList.forEach(species => {
    if (req.params.species === species) {
      res.status = "success";
      res.message = true;
    }
  })
  next()
}
//------------------------------------
const finalFunction = (req, res) => {
  // console.log(res.status, res.message);
  res.json({status: res.status, message: res.message})
}
//------------------------------------
const error = (req, res) => {
  res.json({message: "👎👿404"});
}
//------------------------------------
app.get('/animal/:species',animalSearch,finalFunction)
app.get('/*', error)
//------------------------------------
const port = 3500;
app.listen(port, ()=> {
  console.log('Your port IS: ', port);
})

//====================================
