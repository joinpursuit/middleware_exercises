function generateSpread (req, res, next){
  let floor = parseInt(req.query.floor);
  let ceil = parseInt(req.query.ceil)
  let output = []

  for(let i = floor; i <= ceil; i++) {
      output.push(i)
  }

  let randomPick = output[Math.floor(Math.random() * output.length)]

  let randomDisplay = {
    status: 'success',
    range: [floor, ceil],
    randPick: randomPick
  }

  res.json(randomDisplay)

  next()
}

module.exports = {
  generateSpread: generateSpread
}
