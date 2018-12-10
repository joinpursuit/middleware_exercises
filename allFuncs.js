const animalPresent = (req, res, next) => {
  let animals = [
    'tiger',
    'lion',
    'cat',
    'panther',
    'dog',
    'mouse',
    'dove',
    'cow',
  ];

  if (animals.includes(req.params.choice)) {
    res.input = true;
  } else {
    res.input = false;
  }

  next();
};

const generateSpread = (req, res, next) => {
  res.inputRange = [];
  res.randNum;
  for (let i = req.query.floor; i <= req.query.ceil; i++) {
    res.inputRange.push(i);
    res.randNum =
      res.inputRange[Math.floor(Math.random() * res.inputRange.length)];
  }

  next();
};

module.exports = {
  animalPresent: animalPresent,
  generateSpread: generateSpread,
};
