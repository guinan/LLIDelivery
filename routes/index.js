var express = require('express');
var router = express.Router();
var db = module.parent.db;
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req,res){
	res.render('index', {
		title: 'LLIDelivery'
	});
});

router.get('/resource', function(req,res){
	//http://data.organic-edunet.eu/resource/resource/2909
	//tmp= db.jsonld.search({'@type' : "lom:LearningObject",}, function(err, obj) {
	db.search("*", function (err, results) {
  		console.log(JSON.stringify(results, null, 2));
		res.render('resource', 
		{
			title: "LLIDelivery",
			data: results
		});
	});
	
});

//return value of the whole file
module.exports = router;
