const generateSpread = (req, res, next) => {
  console.log("Rando here ");
  let floor = parseInt(req.query["floor"]);
  let ceiling = parseInt(req.query["ceiling"]);
  let rangeArr = [];
  // populate an array with numbers between floor and ceiling
  // Math.floor(Math.random() * NAME OF ARRAY )
  for (let i = floor; i <= ceiling; i++) {
    rangeArr.push(i);
  }
 let randPick = Math.floor(Math.random() * rangeArr[rangeArr.length-1])

  let obj = {
    status:"success",
    range: [floor,ceiling],
    randPick:randPick
  };
  res.sender = obj;
  next();
};

module.exports = {
  generateSpread
};
