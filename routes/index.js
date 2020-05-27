var express = require('express');
var router = express.Router();
var animal = require('../controllers/animal_adoption');
var adoptionforms = require('../controllers/animal_adoption')


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
  Promise.all([
      animal.getOneUser(),
  ])
      .then(function (result) {
          const animals = result[0][0];
          //console.log(animals),
          res.render('animal_detail',{title:'Animal Adoption',animals:animals},
          );
      })

});

router.get('/thankyou_page', function(req, res, next) {
  const id = "5ecab49aa1995244a9f980a8";
  Promise.all([
    adoptionforms.getForms(id),
  ])
      .then(function (result) {
        const adoptionforms = result[0];
        //console.log(animals),
        res.render('thankyou_page',{title:'Animal Adoption',adoptionforms:adoptionforms},
        );
      })

});



router.get('/adoption_form', function(req, res, next) {
  res.render('adoption_form',{title:'Animal Adoption'});
});




module.exports = router;
