const generateSpread = (req, res, next) => {
  let floor = parseInt(req.query['floor']);
  let ceil = parseInt(req.query['ceil']);
  let arr = [];
  // console.log(floor, ceil);
  for (let i = floor; i <= ceil; i++) {
    arr.push(i)
    console.log(i);
  }
  let random = Math.floor(Math.random() * arr[arr.length - 1])
  // console.log(arr);
  // console.log(random);
  let obj = {
    status: "success",
    range: [floor, ceil],
    randPick: random
  }
  res.message = obj
  next();
}


module.exports = {
  generateSpread,
}