var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req,res){
	res.render('index', {
		title: 'LLIDelivery'
	});
});

router.get('resource', function(req,res){
	
	res.render('index', null
		);
});

//return value of the whole file
module.exports = router;
