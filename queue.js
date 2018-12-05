const handleQueue = (req, res, next) => {
  let stackArr = ["Supermanitee", "Flashcards", "Wonder Bread", "Batperson"]
  let sta = req.params.wild;
  console.log(req.query);
  let response;
  let name = req.query["name"]
  console.log(name);
  if (sta === "peek") {

    response = {
      status: "success",
      data: stackArr[stackArr.length - 1]
    }
  } else if (sta === "enqueue") {
    stackArr.unshift(name)
    response = {
      status: "success",
      data: stackArr[0]
    }
  } else if (sta === "dequeue") {
    response = {
      status: "success",
      data: stackArr.pop()
    }
  }


  res.something = resp;
  next();
}


module.exports = {
  handleQueue,

}