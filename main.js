const express = require('express')
const port = 1000;
const app = express()
const queue = require('./function')

Array.prototype.contains = function (element) {
    return this.indexOf(element) > -1;
};


app.listen(1000, () => {
    console.log(`middleWare Server @ ${port}`)
})

const animalChecker = (req,res,next) => {
    type = req.params.type
    const animalarray = ["chicken", "zebra", "duck", "dog", "cat", "bison", "mouse", "dolphins"];
    let obj = {
        status: "success",
        message: false
    }
    if (animalarray.contains(type)) {
        obj.message = true
        res.json(obj)
    } else {
        res.json(obj)
    }
next()
}

const generateSpread = (req,res,next) => {
    let floor = parseInt(req.query.floor)
    let ceil = parseInt(req.query.ceil)
    let output =[]
    console.log(floor + ceil)
    if(floor <= ceil){
        for(let i = floor; i < ceil; i++){
            output.push(i)
        }
    }
    else {
        res.json("Please make sure floor is a lower number than ceil")
    }
    let randomPick = output[Math.floor(Math.random()*output.length)]
    let obj = {
        status: "success",
        range: `[${floor}, ${ceil}]`,
        randPick: `${randomPick}`
    }
    res.json(obj)

    // console.log(output)

    next()
}

app.get('/animal/:type',animalChecker, (req, res)=> {
})

app.get('/', (req, res) => {
})

app.get('/random',generateSpread,(req,res)=> {
})

app.get('/queue/:operator',queue.queueManager, (res,req)=>{
    console.log("End of Queue")
})



