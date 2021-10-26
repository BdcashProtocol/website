var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  title: 'Bdcash Protocol',
  description: ' - Home page'
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', {
	  title: 'About',
	  description: ' - project BDCASH'
	  });
});

/* GET about page. */
router.get('/team', function(req, res, next) {
  res.render('team', {
	  title: 'Team ',
	  description: ' - Know all contributors'
	  });
});

/* GET about page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {
	  title: 'Contact ',
	  description: ' - Send your feedback or question'
	  });
});

module.exports = router;
