var express = require('express');
var router = express.Router();
var tables = require('../models/index.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  tables.Page.find(function(err, docs){
  	res.render('index', { title: 'Wikistack', docs: docs });
  });
});

router.get('/about', function(req, res, next){
	res.render("about_us", {title: "About Us"});
});

router.get('/wiki/:url_name', function(req, res, next){
	tables.Page.findOne({url_name: req.params.url_name}, function(err, page){
		res.render("show", {
			title: page.title, 
			content: page.content, 
			date: page.date.toString(),
			tags: page.tags.join(" "),
			url_name: page.url_name
		});
	});
});

router.get('/wiki/:url_name/edit', function(req,res,next){
    tables.Page.findOne({url_name: req.params.url_name}, function(err, page){
    res.render("addPage", {
      title: page.title, 
      content: page.content, 
      tags: page.tags.join(" "),
    });
  });
});

router.post('/wiki/:url_name/edit/submit', function(req,res,next){
    tables.Page.findOne({url_name: req.params.url_name}, function(err, page){
    res.render("addPage", {
      title: page.title, 
      content: page.content, 
      tags: page.tags.join(" "),
    });
  });
});

module.exports = router;
