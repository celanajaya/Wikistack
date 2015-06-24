var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next){
	res.render("addpage");
});

router.post('/submit', function(req, res) {
  var models = require('../models/');
  // STUDENT ASSIGNMENT:
  // add definitions of the `title`, `content` and `url_name` variables here
  var title = req.body.title;
  var content = req.body.content;
  var tags = req.body.tags;
  var url_name = '';
  if (title) url_name = title.replace(/\s/g, '_').replace(/\W/g,'');
  else url_name = "post_" + Math.floor(Math.random() * 1000000);
  console.log(url_name);
  var page = new models.Page({ 'title': title, 'content': content, 'url_name': url_name, 'tags': tags});
  page.save();
  res.redirect('/');
});

module.exports = router;