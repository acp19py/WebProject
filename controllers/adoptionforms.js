var bodyParser = require("body-parser");
var req = require('request');
const adoptionforms = require('../models/adoptionforms');
var path = require('path');


exports.create = function (req, res) {
    var userData = req.body;
    var adoptionForms = new adoptionforms({
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
    });
};

exports.listUsers = function (req, res) {
    adoptionforms.find({_id:"5ecab88f54274d69684e1343"}, function (err, adoptionforms) {
        if (err) {
            return res.send(500, err);
        }
        res.render('thankyou_page', {
            title: "Here all all the available data",
            adoptionforms: adoptionforms
        });
    });
};

//
// adoptionforms.find({_id:"5ecab88f54274d69684e1343"})
//     .then(function (result){
//         console.log(result)
//     })


