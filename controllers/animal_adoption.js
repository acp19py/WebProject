var bodyParser = require("body-parser");
var req = require('request');
var mongo = require('../models/animal_adoption');
const animals = mongo.animals;
const users = mongo.users;
const adoptionforms = mongo.adoptionforms;
var path = require('path');


    animals.find()
        .exec()
        .then(function (result) {
            console.log(result)
        })
