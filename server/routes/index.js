var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET contact form submission data */
router.get('/contactform', function(req, res, next) {
  res.render('index', { title: 'Express' }
}); 

module.exports = router;
