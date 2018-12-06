let names = ['xavier', 'michelle', 'corey', 'reed'];

const handleQueue = (req, res) => {
  let method = req.params.method;
  let response = {};
  if (method === 'peek') {
    response.status = 'success',
      response.data = names[names.length - 1];
  } else if (method === 'enqueue') {
    names.unshift(req.query.name);
    response.status = 'success';
    response.enqueued = req.query;
  } else if (method === 'dequeue') {
    let dequeued = names.pop();
    response.status = 'success';
    response.dequeued = dequeued;
  } else {
    response.status = 'fail';
    response.query = req.query;
  }

  console.log(names);
  res.json(response);
};

module.exports = {
  handleQueue,
};
