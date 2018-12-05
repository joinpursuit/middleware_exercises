const functionChooser = (req, res, next) => {
  console.log("Rando here ");
  let peek = req.query["peek"];
  let enqueue = req.query["enqueue"];
  let dequeue = req.query["dequeue"]

let arrName = ["Pursuit","Busta Rhymes","Cher","Elon Musk "]

// A FUNCTION TO CHOOSE WITH FUNCTION



  let obj = {
    status:"success",
    Names: arrName,
  };
  res.sender = obj;
  next();
};


module.exports = {
  functionChooser
};
