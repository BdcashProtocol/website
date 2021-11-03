var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  title: 'Bdcash Protocol',
  description: ' - Home page'
  });
});
router.get('/home', function(req, res, next) {
	res.render('index', { 
	title: 'Bdcash Protocol',
	description: ' - Home page'
	});
  });

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', {
	  title: 'Bdcash Protocol',
	  description: ' -About project'
	  });
});

/* GET about page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {
	  title: 'Bdcash Protocol ',
	  description: ' - Send your feedback or question'
	  });
});

module.exports = router;
