let obj = { status: "success", message: false }
let arr = ['lion', 'turtle', 'bear', 'tiger', 'bonobo', 'elephant'];

const isAnimal = (req, res, next) => {
  if(arr.includes(req.params.animal)){
    next();
  } else {
    obj.message = false;
    res.json(obj)
  }
}

module.exports = {
  isAnimal: isAnimal,
  obj: obj,
  arr: arr
}
