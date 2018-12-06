let resultObj = {
  status: "success",
  range: [],
  randPick: 12
}

const generateSpread = (req, res, next) => {
  let floor = parseInt(req.query.floor);
  let ceiling = parseInt(req.query.ceiling);
  let arr = [];
  for(let i = floor; i <= ceiling; i++){
    arr.push(i)
  }
  resultObj.range = [floor, ceiling]
  resultObj.randPick = arr[Math.floor(Math.random() * arr.length)]
  next()
}

module.exports = {
  resultObj,
  generateSpread
}
