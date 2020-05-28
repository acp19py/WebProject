var bodyParser = require("body-parser");
var req = require('request');
const animals = require('../models/animals');
var path = require('path');

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
    //const id = req.query.id;
    const id = "5ecabd7c54274d69684e1347";
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