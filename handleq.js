const functionChooser = (req, res, next) => {
  console.log("Rando here ");
  let peek = req.query["peek"];
  let enqueue = req.query["enqueue"];
  let dequeue = req.query["dequeue"];
  let objKey = req.params.wildcard;
  console.log(objKey);

  let arrName = ["Pursuit", "Busta Rhymes", "Cher", "Elon Musk "];
  function handleQueuePeek(arrName) {
    return arrName[arrName.length - 1];
  }
  function handleQueueEnqueue(arrName, nameString) {
    arrName.unshift(nameString);
    return nameString;
  }
  function handleQueueDequeue(arrName) {
    let result = arrName.pop();
    return result;
  }
  const checkHandleQueue = (req, res, next) => {
    let entry = req.params.type;
    let items = Object.values(req.query);
    if (entry === "peek") {
      res.result = handleQueuePeek(arr);
    } else if (entry === "enqueue") {
      res.result = handleQueueEnqueue(arr, items[0]);
    } else if (entry === "dequeue") {
      res.result = handleQueueDequeue(arr);
    }
    next();
  };
};
module.exports = {
  functionChooser
};

// A FUNCTION TO CHOOSE WITH FUNCTION
// if (objKey === "peek") {
//  let obj = {
//    status: "success",
//    peek: arrName
//  };
//  res.sender = obj;
//  next();
// } else if (objKey === "enqueue") {
//  let obj = {
//    status: "success",
//    enqueue: henqueue()
//  };
//  res.sender = obj;
//  next();
// } else if (objKey === "dequeue") {
//  let obj = {
//    status: "success",
//    dequeue: arrName
//  };
//  res.sender = obj;
//  next();
// }

//   let obj = `{
//       status: "success",
//       ${objKey}: ${arrName}
//     }`
//   res.sender = obj;
//   next();
// };
