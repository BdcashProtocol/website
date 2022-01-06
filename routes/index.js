var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  title: 'BDCash Protocol',
  description: ' - Home page'
  });
});

/* GET team page */
router.get('/team', function(req, res, next) {
	res.render('team', { 
	title: 'BDCash Protocol',
	description: ' - Our Team and contributors'
	});
  });

 /* GET download page */
router.get('/donwload', function(req, res, next) {
	res.render('donwload', { 
	title: 'BDCash Protocol',
	description: ' - Donwloads your wallets app.'
	});
  }); 

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', {
	  title: 'BDCash Protocol',
	  description: ' - About project'
	  });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {
	  title: 'BDCash Protocol',
	  description: ' - Send your feedback or question'
	  });
});

/* GET Roadmap page. */
router.get('/roadmap', function(req, res, next) {
  res.render('roadmap', {
	  title: 'BDCash Protocol',
	  description: ' - Check all goals future for project'
	  });
});

/* GET Market page. */
router.get('/markets', function(req, res, next) {
  res.render('markets', {
	  title: 'BDCash Protocol',
	  description: ' - Get link to all markets bdcash'
	  });
});


module.exports = router;
