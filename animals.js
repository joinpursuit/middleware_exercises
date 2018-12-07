let animalList = ['tiger', 'lion', 'dog', 'shark', 'snake', 'penguin', 'cat']


let display = {
  status: 'success',
  message: false
}

function animal(req, res, next) {
  if(animalList.includes(req.params.animalType)) {
    display.message = true;
    next()
  }else {
    res.json(display)
  }
}

module.exports = {
  animal: animal,
  display: display,
  animalList: animalList
}
