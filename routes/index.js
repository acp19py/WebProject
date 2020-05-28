var express = require('express');
var router = express.Router();
var animal = require('../controllers/animals');
var adoptionforms = require('../controllers/adoptionforms');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/homepage', function(req, res, next) {
  res.render('homepage',{title:'Animal Adoption'});
});

router.post('/homepage', function(req, res, next) {
  animal.searchAnimal(req,res);
});

router.get('/search_result', function(req, res, next) {
  animal.searchResult(req,res);
});

router.get('/create_animal', function(req, res, next) {
  res.render('create_animal',{title:'Animal Adoption'});
});

router.get('/cats', function(req, res, next) {
  animal.listCats(req,res);
});

router.get('/dogs', function(req, res, next) {
  animal.listDogs(req,res);
});

router.get('/create_animal', function(req, res, next) {
  res.render('create_animal',{title:'Animal Adoption'});
});

router.get('/animal_detail', function(req, res, next) {
  res.render('animal_detail',{title:'Animal Adoption'});
});

router.get('/thankyou_page', function(req, res, ) {
  adoptionforms.list(req,res);
});

router.get('/adoption_form', function(req, res, next) {
  res.render('adoption_form',{title:'Animal Adoption'});
});
router.post('/adoption_form', function(req, res) {
    adoptionforms.create(req,res);
});

module.exports = router;
