function generateSpread(start, end) {
  let result = [];
  for (let i = start + 1; i < end; i++) {
    result.push(i);
  }

  return result[Math.floor(Math.random()* result.length)];
}

const checkGenerateSpread = (req, res, next) => {
  let values = Object.values(req.query);
  let numValues = values.map(el => +el);
  res.randomNumber = generateSpread(numValues[0],numValues[1]);
  next();
}

module.exports.checkGenerateSpread = checkGenerateSpread;
