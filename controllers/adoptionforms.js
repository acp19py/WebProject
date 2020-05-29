var bodyParser = require("body-parser");
var req = require('request');
const adoptionforms = require('../models/adoptionforms');
var path = require('path');

/**
*   write data to adoptionforms database
*   Data is edited by user input,Browser send request using JSON data
*
* */
exports.create = function (req, res) {
    var userData = req.body;
    var id = req.query.id
    var adoptionForms = new adoptionforms({
        AnimalID: id,
        Name: userData.Name,
        Age: userData.Age,
        Job: userData.Job,
        Location: userData.Location,
        Experience: userData.Experience,
        Status: 'pending',
        Income: userData.Income,
        AdoptReason: userData.AdoptReason
    });

    adoptionForms.save(function (err, results) {
        if (err)
            res.status(500).send('Invalid data!');
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(adoptionForms));
        // console.log(adoptionForms._id)
    });
};
/*
* According to the Id that is returned bu Ajax,get the name from database
* */
exports.listUsers = function (req, res) {
    const id = req.query.id
    adoptionforms.find({_id:id}, function (err, adoptionforms) {
        if (err) {
            return res.send(500, err);
        }
        res.render('thankyou_page', {
            title: "Here all all the available data",
            adoptionforms: adoptionforms[0]
        });
    });
};


// adoptionforms.find({_id:"5ecab88f54274d69684e1343"})
//     .then(function (result){
//         console.log(result[0].Name)
//     })
//

