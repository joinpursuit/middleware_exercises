const animal = ["cat", "dog", "mouse", "zebra", "elephant", "lion", "jaguar", "snake", "sheep", "goat", "pig", "tiger"];


const isAnimal = (req, res, next) => {
  if (animal.includes(req.params.animalName)) {
    let objt = {};
    objt.status = "success"
    objt.message = true;
    res.json(objt)
  } else {
    next();
  }
}


module.exports = isAnimal
