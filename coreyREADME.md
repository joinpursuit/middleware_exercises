```js
//===== not working. only showing for the last animal in array. =====

//==================================
const express = require('express');
const app = express();
//----------------------------------
let animalList = ["zebra", "tiger", "lion", "goat"]
//----------------------------------
const animalSearch = (req, res, next) => {
  let status;
  let message;
  animalList.forEach(species => {
    if (req.params.species !== species) {
      status = "failure"
      message = false
    } else {
      status = "success";
      message = true;
    }
  })
  res.status = status;
  res.message = message;
// req.params.species;
// res.status = true;
  next()
}
//----------------------------------
const finalFunction = (req, res) => {
  console.log(res.status, res.message);
  res.json({search: req.params.species, status: res.status, message: res.message})
}
//----------------------------------
const error = (req, res) => {
  res.json({message: "👎👿404"});
}
//----------------------------------
app.get('/animal/:species',animalSearch,finalFunction)
app.get('/*', error)
//----------------------------------
const port = 3100;
app.listen(port, ()=> {
  console.log('porting: ', port);
})
//==================================
```
_Me: (Sunday 12.53pm dec 9th 2018)_
corey, sorry to do this to you. but middleware part 1! im still on it. im in a for loop and it is only working for the last element of the array. i am trying to figure out how to return (res.status/res.message) outside ofthe
for loop so that
that could stop happening. so i tried to use regular variables in teh if statements and
assign that result to the res. ones
stupid QUESTIONS:
1.
we need the res. keyword to make our result travel into another funciton right?
2. res. works kind of like "return" in a way?
I think that's all.
bye. have a nice weekend.

_coreyladovsky [1:05 PM]_
Hey, I think I see what’s wrong with function. You’re using an if else inside a for loop. So whether or not it finds a match it WILL change the message / status. This is not the desired effect. We should consider setting up our initial values upon declaration to be what we want in the event we don’t find what we’re looking for. We only care to change these if we find a match, otherwise it will already be set to ‘no match’.
1. I wouldn’t call res a keyword as you _could_ technically use a different variable name in your function. However, I would keep it as res because that is what is consistent in the industry and it is referring to the eventual response.
Each function will take a request, response, and a next. It’s the next tells us to move to the next function.
2. res is just the response object. I think you may be reffereing to res.send.
This kind of works as a return as it sends forward a response, however the code beneath it will technically still run.

```js
//===========final solution: ===============
const express = require('express');
const app = express();
//----------------------------------
let animalList = ["zebra", "tiger", "lion", "goat"]
//----------------------------------
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
//----------------------------------
const finalFunction = (req, res) => {
  console.log(res.status, res.message);
  res.json({status: res.status, message: res.message})
}
//----------------------------------
const error = (req, res) => {
  res.json({message: "👎👿404"});
}
//----------------------------------
app.get('/animal/:species',animalSearch,finalFunction)
app.get('/*', error)
//----------------------------------
const port = 3100;
app.listen(port, ()=> {
  console.log('Your port is: ', port);
})

//===========solution with variables:=======

const express = require('express');
const app = express();
//----------------------------------
let animalList = ["zebra", "tiger", "lion", "goat"]
//----------------------------------
const animalSearch = (req, res, next) => {
  let status = "failure";
  let message = false;
  animalList.forEach(species => {
    if (req.params.species === species) {
      status = "success";
      message = true;
    }
  })
  res.status = status;
  res.message = message;
// req.params.species;
// res.status = true;
  next()
}
//----------------------------------
const finalFunction = (req, res) => {
  console.log(res.status, res.message);
  res.json({search: req.params.species, status: res.status, message: res.message})
}
//----------------------------------
const error = (req, res) => {
  res.json({message: "👎👿404"});
}
//----------------------------------
app.get('/animal/:species',animalSearch,finalFunction)
app.get('/*', error)
//----------------------------------
const port = 3100;
app.listen(port, ()=> {
  console.log('porting: ', port);
})
//==================================
```
