let arr = ['xavier', 'michelle', 'corey', 'reed'];

function handleQueuePeek(array) {
  return array[array.length-1]
}

function handleQueueEnqueue(array, nameString) {
  array.unshift(nameString);
  return nameString;
}

function handleQueueDequeue(array) {
  let result = array.pop()
  return result;
}


const checkHandleQueue = (req, res, next) => {
  let entry = req.params.type;
  let items = Object.values(req.query);

  if (entry === 'peek') {
    res.result = handleQueuePeek(arr);
  } else if (entry === 'enqueue') {
    res.result = handleQueueEnqueue(arr, items[0]);
  } else if (entry === 'dequeue') {
    res.result = handleQueueDequeue(arr);
  }

  next();
}

module.exports.checkHandleQueue = checkHandleQueue;
