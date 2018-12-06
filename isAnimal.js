let animalArr = ['lion', 'giraffe', 'abed', 'tiger', 'rat', 'bear', 'meow']
let obj = { status: "success", message: false }

const isAnimal = (req, res, next) => {
  if(animalArr.includes(req.params.animal)){
    obj.message = true
    next()
  }else{
    obj.message = false;
    res.send(obj);
  }
}


module.exports = {
  obj: obj,
  isAnimal: isAnimal
}
