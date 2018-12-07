let users = ['xavier', 'michelle', 'corey', 'reed']

let display = {
  status: 'success',
}

function queueHandler(req, res, next) {
  let choice = req.params.choice;

  if(choice === 'peek') {
    display.data = users[users.length -1]
    // console.log(users);
    res.json(display)
    next()
  }else if(choice === 'dequeue') {
    let popped = users.pop();
    display.dequeue = popped
    // console.log(users);
    res.json(display)
    next()
  }else if(choice === 'enqueue') {
    users.unshift(req.query.name);
    display.enqueue= req.query
    // console.log(users);
    res.json(users)
    next()
  }
}

module.exports = {
  queueHandler: queueHandler,
  display: display,
  users: users
}
