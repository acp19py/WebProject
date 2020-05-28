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
        res.send(JSON.stringify(adoptionforms));
    });
};

exports.list = function (req, res) {
    adoptionforms.find({}, 'Name Address', function (err, adoptionforms) {
        if (err) {
            return res.send(500, err);
        }
        res.render('list', {
            title: "Here all all the available data",
            data: adoptionforms
        });
    });
};