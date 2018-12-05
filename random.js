const generateSpread = (req, res, next) => {

  let output = [];

  for (let i = parseInt(req.query.floor); i <= parseInt(req.query.ceil); i++) {
    output.push(i);
  }
  res.arrayRange = output;
  next();
}

module.exports = {
  generateSpread
}
