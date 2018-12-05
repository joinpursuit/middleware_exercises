const isAnimal = (req, res, next) => {
  console.log("Animal Checker");
  let inputAnimal = req.params.type;
  let message;
  let animalArr = ["dog", "cat", "hedgehog", "andres"];

    if (animalArr.includes(inputAnimal)) {
      message = true;
      console.log("Worked");
    } else {
      message = false;
      console.log("didnt work ");
    }

  let obj = {
    status: "success",
    message:message
  };
res.sender=obj

  // res.json(obj);
  // res.send(animalArr);
  next();
};

module.exports = {
isAnimal
}
