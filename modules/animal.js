function isAnimal(animalString) {
  let animalsArray = ["cat", "dog", "zebra", "tiger", "lion"];
  if (animalsArray.includes(animalString)) {
    return true;
  } else {
    return false;
  }
}

const checkIsAnimal = (req, res, next) => {
  res.result = isAnimal(`${req.params.animalType}`);
  next();
};

module.exports.checkIsAnimal = checkIsAnimal;
