var bodyParser = require("body-parser");
var req = require('request');
const animals = require('../models/animals');
var path = require('path');

exports.searchResult = function (req, res) {
    const userInput = req.query.userInput;
    const searchData = JSON.parse(userInput)
    console.log(searchData)
    if (searchData.AnimalColor !== "" && searchData.AnimalType !== "" && searchData.AnimalGender !== "" && searchData.AnimalLocation !== "") {
        animals.find({
            Type: searchData.AnimalType,
            Color: searchData.AnimalColor,
            Gender: searchData.AnimalGender,
            Location: searchData.AnimalLocation
        },function(err, animalFound) {
            if (err) {
                return res.send(500, err);
            }
            res.render('search_result', {
                title: "Search Result",
                animals: animalFound,
            });
            console.log(animalFound[0])
        })
    } else if (searchData.AnimalColor === "" && searchData.AnimalType !== "" && searchData.AnimalGender !== "" && searchData.AnimalLocation !== "") {
        animals.find({
            Type: searchData.AnimalType,
            Gender: searchData.AnimalGender,
            Location: searchData.AnimalLocation
        },function(err, animalFound) {
            if (err) {
                return res.send(500, err);
            }
            res.render('search_result', {
                title: "Search Result",
                animals: animalFound
            });
            console.log(animalFound)
        })
    } else if (searchData.AnimalColor !== "" && searchData.AnimalType === "" && searchData.AnimalGender !== "" && searchData.AnimalLocation !== "") {
        animals.find({
            Color: searchData.AnimalColor,
            Gender: searchData.AnimalGender,
            Location: searchData.AnimalLocation
        }),function(err, animalFound) {
            if (err) {
                return res.send(500, err);
            }
            res.render('search_result', {
                title: "Search Result",
                animals: animalFound
            });
            console.log(animalFound)
        }
    } else if (searchData.AnimalColor !== "" && searchData.AnimalType !== "" && searchData.AnimalGender === "" && searchData.AnimalLocation !== "") {
        animals.find({
            Color: searchData.AnimalColor,
            Type: searchData.AnimalType,
            Location: searchData.AnimalLocation
        },function(err, animalFound) {
            if (err) {
                return res.send(500, err);
            }
            res.render('search_result', {
                title: "Search Result",
                animals: animalFound
            });
            console.log(animalFound)
        })
    } else if (searchData.AnimalColor !== "" && searchData.AnimalType !== "" && searchData.AnimalGender !== "" && searchData.AnimalLocation === "") {
        animals.find({
            Color: searchData.AnimalColor,
            Type: searchData.AnimalType,
            Gender: searchData.AnimalGender
        },function(err, animalFound) {
            if (err) {
                return res.send(500, err);
            }
            res.render('search_result', {
                title: "Search Result",
                animals: animalFound
            });
            console.log(animalFound)
        })
    } else if (searchData.AnimalColor === "" && searchData.AnimalType !== "" && searchData.AnimalGender !== "" && searchData.AnimalLocation === "") {
        animals.find({
            Type: searchData.AnimalType,
            Gender: searchData.AnimalGender
        },function(err, animalFound) {
            if (err) {
                return res.send(500, err);
            }
            res.render('search_result', {
                title: "Search Result",
                animals: animalFound
            });
            console.log(animalFound)
        })
    } else if (searchData.AnimalColor !== "" && searchData.AnimalType === "" && searchData.AnimalGender !== "" && searchData.AnimalLocation === "") {
        animals.find({
            Color: searchData.AnimalColor,
            Gender: searchData.AnimalGender
        },function(err, animalFound) {
            if (err) {
                return res.send(500, err);
            }
            res.render('search_result', {
                title: "Search Result",
                animals: animalFound
            });
            console.log(animalFound)
        })
    } else if (searchData.AnimalColor !== "" && searchData.AnimalType !== "" && searchData.AnimalGender === "" && searchData.AnimalLocation === "") {
        animals.find({
            Color: searchData.AnimalColor,
            Type: searchData.AnimalType,
        },function(err, animalFound) {
            if (err) {
                return res.send(500, err);
            }
            res.render('search_result', {
                title: "Search Result",
                animals: animalFound
            });
            console.log(animalFound)
        })
    }else if (searchData.AnimalColor !== "" && searchData.AnimalType === "" && searchData.AnimalGender === "" && searchData.AnimalLocation !== "") {
        animals.find({
            Color: searchData.AnimalColor,
            Location: searchData.AnimalLocation
        },function(err, animalFound) {
            if (err) {
                return res.send(500, err);
            }
            res.render('search_result', {
                title: "Search Result",
                animals: animalFound
            });
            console.log(animalFound)
        })
    }else if (searchData.AnimalColor === "" && searchData.AnimalType !== "" && searchData.AnimalGender === "" && searchData.AnimalLocation !== "") {
        animals.find({
            Type: searchData.AnimalType,
            Location: searchData.AnimalLocation
        })
    }else if (searchData.AnimalColor === "" && searchData.AnimalType === "" && searchData.AnimalGender !== "" && searchData.AnimalLocation !== "") {
        animals.find({
            Gender: searchData.AnimalGender,
            Location: searchData.AnimalLocation
        },function(err, animalFound) {
            if (err) {
                return res.send(500, err);
            }
            res.render('search_result', {
                title: "Search Result",
                animals: animalFound
            });
            console.log(animalFound)
        })
    }else if (searchData.AnimalColor === "" && searchData.AnimalType === "" && searchData.AnimalGender === "" && searchData.AnimalLocation !== "") {
        animals.find({
            Location: searchData.AnimalLocation
        },function(err, animalFound) {
            if (err) {
                return res.send(500, err);
            }
            res.render('search_result', {
                title: "Search Result",
                animals: animalFound
            });
            console.log(animalFound)
        })
    }else if (searchData.AnimalColor === "" && searchData.AnimalType === "" && searchData.AnimalGender !== "" && searchData.AnimalLocation === "") {
        animals.find({
            Gender: searchData.AnimalGender,
        },function(err, animalFound) {
            if (err) {
                return res.send(500, err);
            }
            res.render('search_result', {
                title: "Search Result",
                animals: animalFound
            });
            console.log(animalFound)
        })
    }else if (searchData.AnimalColor === "" && searchData.AnimalType !== "" && searchData.AnimalGender === "" && searchData.AnimalLocation === "") {
        animals.find({
            Type: searchData.AnimalType,
        },function(err, animalFound) {
            if (err) {
                return res.send(500, err);
            }
            res.render('search_result', {
                title: "Search Result",
                animals: animalFound
            });
            console.log(animalFound)
        })
    }else if (searchData.AnimalColor !== "" && searchData.AnimalType === "" && searchData.AnimalGender === "" && searchData.AnimalLocation === "") {
        animals.find({
            Color: searchData.AnimalColor,
        },function(err, animalFound) {
            if (err) {
                return res.send(500, err);
            }
            res.render('search_result', {
                title: "Search Result",
                animals: animalFound
            });
            console.log(animalFound)
        })
    }else{
        animals.find({},function(err, animalFound) {
            if (err) {
                return res.send(500, err);
            }else{
                res.render('search_result',{
                    title: "Search Result",
                    animals:animalFound
            });

            }
        })
    }
}

exports.searchAnimal = function(req,res){
    const userInput = req.body;
    res.send(JSON.stringify(userInput))
}

exports.listCats = function (req,res) {
    animals.find({Type:'cat'}, function (err, animalFound) {
        if (err) {
            return res.send(500, err);
        }
        res.render('cats', {
            title: "All Cats",
            animals: animalFound
        });
    });
}

exports.listDogs = function (req,res) {
    animals.find({Type:'dog'}, function (err, animalFound) {
        if (err) {
            return res.send(500, err);
        }
        res.render('dogs', {
            title: "All Dogs",
            animals: animalFound
        });
    });
}