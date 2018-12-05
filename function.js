let users = ['xavier', 'michelle', 'corey', 'reed']

function display (){
    return obj2 = {
        status: "success"
    }
}
function queueManager(req,res,next) {
    operator = req.params.operator
    obj2 = display()
    if(operator === "peek"){
        res.json(peek(users))
    }
    else if(operator === "enqueue"){
       let name = req.query.name
        res.json(enqueue(name)
        )
        console.log(users)
    }
    else if(operator === "dequeue"){
        res.json(dequeue(users))
        console.log(users)
    }
    next()

}

function peek (array) { 
    console.log(array)
    obj2.data = array[array.length-1]
    console.log(obj2)
    return obj2
}

function enqueue(string){
    users.unshift(string)
    obj2.enqueued = string
    return obj2
}

function dequeue(array){
    obj2.dequeue =  array.pop()
    return obj2
    
}

module.exports = {
    queueManager,
    peek,
    enqueue,
    dequeue
}