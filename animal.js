const isAnimal = (req, res, next) => {

  let arrAnimals = ['zebra','tiger','rabbit','sparrow','porcupine'];
  if (arrAnimals.includes(req.params.name)) {
    res.boolean = true;
  } else {
    res.boolean = false;
  }
  next();
}

module.exports = {
  isAnimal
}
