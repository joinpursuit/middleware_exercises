const express = require("express");

const app = express();

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

app.get("/animal", animalCheck, (req, res) => {



    res.json(req.query);
}); //end of animal get request

app.get("/isAnimal", animalCheck, (req, res) => {
    res.json({
        status: "failure",
        message: false
    });
});


app.listen(8000, () => {
    console.log("you are listening to port 8000");
});