//finding if animal is included function
const isAnimal = (req, res, next) => {

  let inputAnimal = req.params.animalType;
  let animalArr = ["dunkey", "shrek", "banana", "wolf"]
  //compare input to arr
  let doesItInclude = animalArr.includes(inputAnimal)
  let obj = {
    status: "success",
    message: doesItInclude
  }
  //return obj status
  res.message = obj;
  //apparently necessary
  next();
}

module.exports = {
  isAnimal
}