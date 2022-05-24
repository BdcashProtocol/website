var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  title: 'BDCashProtcol Ecosystem',
  description: ' - Home page'
  });
});

/* GET team page */
router.get('/team', function(req, res, next) {
	res.render('team', { 
	title: 'BDCashProtcol Ecosystem',
	description: ' - Our Team and contributors'
	});
  });

 /* GET download page */
router.get('/donwload', function(req, res, next) {
	res.render('donwload', { 
	title: 'BDCashProtcol Ecosystem',
	description: ' - Donwloads your wallets app.'
	});
  }); 

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', {
	  title: 'BDCashProtcol Ecosystem',
	  description: ' - About project'
	  });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {
	  title: 'BDCashProtcol Ecosystem',
	  description: ' - Send your feedback or question'
	  });
});

/* GET Roadmap page. */
router.get('/roadmap', function(req, res, next) {
  res.render('roadmap', {
	  title: 'BDCashProtcol Ecosystem',
	  description: ' - Check all goals future for project'
	  });
});

/* GET Market page. */
router.get('/markets', function(req, res, next) {
  res.render('markets', {
	  title: 'BDCashProtcol Ecosystem',
	  description: ' - Get link to all markets bdcash'
	  });
});


module.exports = router;
