let animalOptions = ['fox', 'koala', 'raccoon', 'cat', 'frog', 'dog', 'rabbit'];
let result = { status: 'success', message: false };

const isAnimal = (req, res, next) => {
  if (animalOptions.includes(req.params.animal)) {
    next();
  } else {
    result.message = false;
    res.json(result);
  }
};

module.exports = {
  animalOptions,
  isAnimal,
  result,
};
