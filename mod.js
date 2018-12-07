const express = require('express');
const app = express();

let animalList = ["zebra", "tiger", "lion"]




const animalSearch = (req, res, next) => {
  // console.log("log"/*, req.params.species*/);
  console.log(req.params.species);
  // res.json({message: req.params.species})

  let search = req.params.species;
  // let res.status;
  // let res.message;
  animalList.forEach(string => {
    if (search === string) {
      res.status = "success",
      res.message = true
    } else {
      res.status = "failure",
      res.message = false
    }
  })
  console.log(res.status);
  // console.log("here",status, message);
  // res.msg = [status, message]

// res.json()
  // res.json({status, message})
  next()
}




const finalFunction = (req, res) => {
  res.json({status: res.status, message: res.message})
  // console.log("here",req.params.species);
  // res.json(res.msg)

  // res.json({status, message})
  // res.json({message: res.params.species})

  // res.json({
  //   status: ,
  //   message:
  // })
}




const error = (req, res) => {
  res.json({message: "👎👿404"});
}

app.get('/animal/:species', animalSearch, finalFunction)

app.get('/*', error)








const port = 3500;
app.listen(port, ()=> {
  console.log('porting: ', port);
})

//===============================

// const middleware = (res, req, next) => {
//   // console.log(req.params);
//   const species = ['zebra', 'tiger', 'elephant']
//
//   res.json(
//     let answer;
//     for (let i = 0; i < species.length; i++) {
//
//       if (Object.value(req.params) === species[i]) {
//         answer = true;
//       } else {
//         answer = false;
//       }
//     }
//     return answer;
//   )
//
//   next();
// }
//
// app.get('/animal/:wildcard', middleware)
