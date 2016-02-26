var express = require('express');
var router = express.Router();
var llidata = require('../llidata.json');
var db = module.parent.db;

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log("Yep");
	//putting triples into the DB
  //var lli = llidata.ex1;
  console.log("loaded lli: "+llidata);
  db.put(llidata, function(err){
  	if(err){
  		console.log("Whoops ... "+err);
  		res.sendStatus(500)
  	}
  	else{
  		res.sendStatus(200);
  	}
  });

});

module.exports = router;
