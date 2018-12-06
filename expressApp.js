let nameArr = ['xavier', 'michelle', 'corey', 'reed'];
const handleQueue = (req, res, next) => {
  const manager = req.params.manager;
  if (manager === 'peek') {
    if (nameArr.length > 0) {
      res.queue = {
        status: 'success',
        data: nameArr[nameArr.length - 1]
     }
    } else {
      res.queue = {
        status: 'failure',
        message: 'This is an empty Array!'
      }
    }
  } else if (manager === 'enqueue') {
    const query = req.query;
    const value = Object.values(query).toString();
    nameArr.unshift(value);
    res.queue = {
      status: 'success',
      enqueued: value,
      nameArr: nameArr
    }
  } else if (manager === 'dequeue') {
    if (nameArr.length > 0) {
      res.queue = {
        status: 'success',
        dequeued: nameArr[nameArr.length - 1],
        nameArr: nameArr.slice(0, nameArr.length - 1)
      }
    } else {
      res.queue = {
        status: 'failure',
        message: 'This is an empty Array!'
      }
    }
  } else {
    res.queue = {
      status: 'failure',
      message: 'Invalid input!'
    }
  }
  next();
}

const generateSpread = (req, res, next) => {
    let floor = parseInt(req.query.floor);
    let ceil = parseInt(req.query.ceil);
    
    if (floor < ceil) {
      let range = [];
        let temp = floor
        while(temp < ceil) {
          range.push(temp);
          temp++;
        }
      
        let randomIdx = Math.floor(Math.random() * range.length);
      
        res.randoms = {
          status: 'success',
          range: [parseInt(floor), parseInt(ceil)],
          randPick: range[randomIdx]
        }
    } else {
      res.randoms = {
        status: 'failure',
        messages: 'Both Floor and Ceil should be integer and Floor should be smalller. Please type-in correctly.'
      };
    }
    next();
  }

module.exports = {
  handleQueue: handleQueue,
  generateSpread: generateSpread

}