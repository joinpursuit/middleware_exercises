const generateSpread = (req, res, next) => {
  let minMax = [req.query.floor || 0, req.query.ceil || 10];
  let minMaxArr = getMinMaxArr(minMax);
  let randPick = minMaxArr[getRandomEl(minMaxArr.length)];
  res.json({
    status: 'success',
    range: minMax,
    randPick: randPick,
  });
  next();
};

const getMinMaxArr = (arr) => {
  let output = [];
  for (let i = arr[0]; i <= arr[1]; i++) {
    output.push(i);
  }

  return output;
};

const getRandomEl = (n) => (Math.random() * n) >> 0;

const endRandomRoute = (req, res) => {
  // res.json(req.query);
  res.json(res.message);
};

module.exports = {
  generateSpread,
  endRandomRoute,
};
