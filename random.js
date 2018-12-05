const express = require("express");
const app = express();

// const generateSpread = () => {
//   let floor = req.params.
//
// }

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

app.get("/random/", generateSpread, (req, res) => {
    // res.send(req.query)
});

app.listen(8000, () => {
    console.log("this is port 8000");
});