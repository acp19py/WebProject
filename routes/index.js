var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/homepage', function(req, res, next) {
  res.render('homepage');
});

router.get('/thankyou_page', function(req, res, next) {
  res.render('thankyou_page');
});

router.get('/adoption_form', function(req, res, next) {
  res.render('adoption_form');
});

module.exports = router;
