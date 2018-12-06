let arr = ["elle", "xavier", "michelle", "corey", "reed"];
let obj = { status: "success", data: "" };

const handleQueue = (req, res, next) => {
 if(req.params.option === 'peek'){
   obj.data = arr[ arr.length - 1 ];
   delete obj['enqueue']
   delete obj['dequeue']
   next();
 } else if(req.params.option === 'dequeue'){
   let popped = arr.pop();
   obj.dequeue = popped
   delete obj['enqueue']
   delete obj['data']
   next();
 } else if(req.params.option === 'enqueue'){
   arr.unshift(req.query.name);
   obj.enqueue = req.query.name;
   delete obj['data']
   delete obj['dequeue']
   next();
 }
}

module.exports = {
 handleQueue: handleQueue,
 obj: obj
}
