var express = require('express');
var router = express.Router();
var animal = require('../controllers/animal_adoption');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/homepage', function(req, res, next) {
  res.render('homepage',{title:'Animal Adoption'});
});

router.get('/search_result', function(req, res, next) {
  res.render('search_result',{title:'Search Result'});
});

router.get('/create_animal', function(req, res, next) {
  res.render('create_animal',{title:'Animal Adoption'});
});

router.get('/animal_detail', function(req, res, next) {
  res.render('animal_detail',{title:'Animal Adoption'});
});

router.get('/thankyou_page', function(req, res, next) {
  res.render('thankyou_page',{title:'Animal Adoption'});
});

router.get('/adoption_form', function(req, res, next) {
  res.render('adoption_form',{title:'Animal Adoption'});
});

module.exports = router;
