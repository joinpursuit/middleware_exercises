let result = {
  status: 'success',
  range: [],
  randomPick: 0,
};

const generateSpread = (req, res, next) => {
  let floor = parseInt(req.query.floor);
  let ceiling = parseInt(req.query.ceil);
  let arr = [];
  for (let i = floor; i <= ceiling; i++) {
    arr.push(i);
  }

  result.range = [floor, ceiling];
  result.randomPick = arr[Math.floor(Math.random() * arr.length)];
  next();
};

module.exports = {
  result,
  generateSpread,
};
