const express = require('express');
const app = express();

let animalList = ["zebra", "tiger", "lion", "goat"]



const animalSearch = (req, res, next) => {
  console.log(req.params.species);
  let search = req.params.species;
  let answer;
  // let status;
  //  // = res.status;
  // let message;
   // = res.message;
  animalList.forEach(string => {
    if (string === search) {
      answer = {
        status: "success",
        message: true
      }
    } else {
      answer = {
        status: "failure",
        message: false
      }
    }
  })
  res.answer;
  console.log(search, res.answer);
  // res.status = status;
  // res.message = message;
  // console.log("here", res.status, res.message);

  // console.log(res.status, res.message);
  // res.json({thestatus:status, themessage:message})
  next()
}




const finalFunction = (req, res) => {
  console.log("hhhh", answer);
  res.json({answer})
  // res.json({status: theStatus, message: theMessage})
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
