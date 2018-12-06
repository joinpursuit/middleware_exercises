let obj = {
  status: "success",
  range: [],
  randPick: 0
}

const generateSpread = (req, res, next) => {
  let floor = parseInt(req.query.floor);
  let ceil = parseInt(req.query.ceil);
  let arr = [];
  let arr2 = [floor, ceil];
  for(let i = floor; i <= ceil; i++){
    arr.push(i);
  }
  obj.range = arr2;
  obj.randPick = arr[Math.floor(Math.random() * arr.length)]
  next();
}


module.exports = {
  obj: obj,
  generateSpread: generateSpread
}
