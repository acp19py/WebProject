var express = require('express');
var router = express.Router();
var animal = require('../controllers/animals');
var adoptionforms = require('../controllers/adoptionforms');
var multer = require('multer');

// storage defines the storage options to be used for file upload with multer
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    var original = file.originalname;
    var file_extension = original.split(".");
    // Make the file name the date + the file extension
    filename =  Date.now() + '.' + file_extension[file_extension.length-1];
    cb(null, filename);
  }
});
var upload = multer({ storage: storage });

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

router.post('/create_animal',upload.single('myImage'), function(req, res) {
  animal.create(req,res);
});


router.get('/animal_detail', function(req, res, next) {
  animal.listAnimal(req,res);
});
router.post('/animal_detail', function(req, res) {
  animal.update(req,res);
});

router.get('/thankyou_page', function(req, res,next) {
  adoptionforms.listUsers(req,res);
});

router.get('/adoption_form', function(req, res, next) {
  res.render('adoption_form',{title:'Animal Adoption'});
});
router.post('/adoption_form', function(req, res) {
    adoptionforms.create(req,res);
});

module.exports = router;
