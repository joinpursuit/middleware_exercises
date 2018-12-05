const handleQueue = (req, res, next) => {

  let arr = ['xavier', 'michelle', 'corey', 'reed'];
  let oper = req.params.oper;
  let enqName = req.query.name;
  switch (oper) {
    case "peek":
      res.data = arr[arr.length-1];
      break;
    case "enqueue":
      arr.unshift(enqName)
      res.enqueued = arr[0];
      break;
    case "dequeue":
      res.dequeued = arr.pop();
      break;
  }
    next();

}

module.exports = {
  handleQueue
}
