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
        Status: userData.Status,
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
    adoptionforms.find({}, 'Name Location', function (err, adoptionforms) {
        if (err) {
            return res.send(500, err);
        }
        res.render('thankyou_page', {
            title: "Here all all the available data",
            data: adoptionforms
        });
    });
};

