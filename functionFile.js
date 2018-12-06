let userQueue = ['xavier', 'michelle', 'corey', 'reed'];

const handleQueue = (req, res, next) => {
    let path = req.params.path
    let namesQ = Object.values(req.query);
    let userAsAString = namesQ.toString()
    let popped;

    if (path.toLowerCase() === 'enqueue') {
        userQueue.unshift(userAsAString)
        res.json({
            status: "success",
            enqueued: userAsAString
        })
    } else if (path.toLowerCase() === 'dequeue') {
        popped = userQueue.pop()
        res.json({
            status: "success",
            dequeued: popped
        })
    } else if (path.toLowerCase() === 'peek') {
        let peek = userQueue[userQueue.length - 1]
        res.json({
            status: "success",
            data: peek
        })
    } else {
        console.log("bvalid path");
    }
    console.log(userQueue, "this");
    // })
}

const animalCheck = (req, res, next) => {
    let userInput1 = req.query;
    const animals = ["wolf", "zebra", "dog", "cat"];
    let userAnimal = Object.values(req.query);
    console.log(userAnimal, "this");
    animals.forEach(type => {
        for (let i = 0; i < userAnimal.length; i++) {
            if (type === userAnimal[i]) {
                res.json({
                    status: "success",
                    message: true
                })
            }
        }
    });
    next();
};

const generateSpread = (req, res, next) => {
    let floor = parseInt(req.query.floor);
    let ceil = parseInt(req.query.ceil);
    let output = [];
    let random = Math.floor(Math.random() * ceil);

    if (floor > ceil || floor === ceil || isNaN(floor) || isNaN(ceil)) {
        res.send("please enter valid nums and lowest to greatest pls");
    }

    for (let i = floor; i <= ceil; i++) {
        output.push(i);
    }

    res.json({
        status: "success",
        range: [floor, ceil],
        randPick: output[random]
    });
};

module.exports = {
    userQueue: userQueue,
    handleQueue: handleQueue,
    animalCheck: animalCheck,
    generateSpread: generateSpread
}