//===========declare default to failure adn success IF condition met. (corey said so) (working!)==========

const express = require('express');
const app = express();

let animalList = ["zebra", "tiger", "lion", "goat"]

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

const finalFunction = (req, res) => {
  console.log(res.status, res.message);
  res.json({status: res.status, message: res.message})
}

const error = (req, res) => {
  res.json({message: "👎👿404"});
}

app.get('/animal/:species',animalSearch,finalFunction)
app.get('/*', error)

const port = 3100;
app.listen(port, ()=> {
  console.log('Your port is: ', port);
})


//===========using variables: (working) ===========


// const express = require('express');
// const app = express();
//
// let animalList = ["zebra", "tiger", "lion", "goat"]
//
//
// const animalSearch = (req, res, next) => {
//   let status = "failure";
//   let message = false;
//   animalList.forEach(species => {
//     if (req.params.species === species) {
//       status = "success";
//       message = true;
//     }
//   })
//   res.status = status;
//   res.message = message;
// // req.params.species;
// // res.status = true;
//
//   next()
// }
//
//
// const finalFunction = (req, res) => {
//   console.log(res.status, res.message);
//   res.json({search: req.params.species, status: res.status, message: res.message})
// }
//
//
// const error = (req, res) => {
//   res.json({message: "👎👿404"});
// }
//
//
// app.get('/animal/:species',animalSearch,finalFunction)
// app.get('/*', error)
//
//
// const port = 3100;
// app.listen(port, ()=> {
//   console.log('porting: ', port);
// })

// ====================================
