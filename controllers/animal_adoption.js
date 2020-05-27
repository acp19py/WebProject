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
        });

module.exports = {

    getOneUser : function getOneUser() {

        return animals
            .find()
            .exec();

    },

    getForms : function getForms(id) {
        return adoptionforms
            .findOne({_id:id})
            .populate("UserID")
            .exec();
    }

}



