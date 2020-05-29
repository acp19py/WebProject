var bodyParser = require("body-parser");
var reqest = require('request');
const animals = require('../models/animals');
var path = require('path');


/**
 * This function is used to search animals by using the user input keyword.
 * Analysis the input keyword, then find animal data in the animals database that fit the keywords.
 */
exports.searchResult = function (req, res) {
    const userInput = req.query.userInput;
    const searchData = JSON.parse(userInput)
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


/**
 * This function is used to
 */
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

/**
 *   write date to animals database
 *   Data is edited by user input,Browser send request using JSON data
 *
 * */
exports.create = function (req, res) {
    var animalData = req.body;
    var animalForm = new animals({

        Type: animalData.Type,
        Gender: animalData.Gender,
        Kind: animalData.Kind,
        Color: animalData.Color,
        Age: animalData.Age,
        Location: animalData.Location,
        Status: animalData.Status,
        Description: animalData.Description,
        //img: req.file.path

    });

    animalForm.save(function (err, results) {
        if (err)
            res.status(500).send('Invalid data!');
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(animalForm));
        // console.log(adoptionForms._id)
    });
};

/*
* According to the Id that is returned bu Ajax,get the name from database
* */
exports.listAnimal = function (req, res) {
    const id = req.query.id;
   // const id = "5ecabd7c54274d69684e1347";
    animals.find({_id:id}, function (err, animals) {
        if (err) {
            return res.send(500, err);
        }
        res.render('animal_detail', {
            title: "Here is the animal detail",
            animals: animals[0]
        });
    });
};