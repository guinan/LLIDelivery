var express = require('express');
var router = express.Router();
var db = module.parent.db;

var llidata = require('../lliv2.json');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req,res){
	res.render('index', {
		title: 'LLIDelivery'
	});
});

router.get('/resource/:res_uri', function(req,res){
	//http://data.organic-edunet.eu/resource/resource/2909
	//tmp= db.jsonld.search({'@type' : "lom:LearningObject",}, function(err, obj) {
	//db.search("*", function (err, results) {
  		//console.log(JSON.stringify(llidata, null, 2));
  		res.format({
  			html: function(){

  				res.render('resource', {
					title: "LLIDelivery",
					lli_title: llidata["dcterms:title"]["@value"],
					lli_thumbnail: llidata["schema:image"]["@id"],
					lli_description: llidata["lom:description"]["dcterms:description"]["@value"],
					lli_educ_resourcetype: llidata["lom:educational"]["dcterms:type"][0]["rdf:label"], 
					lli_educ_interlevel: llidata["lom:educational"]["lom:educationalInteractivityLevel"]["rdf:label"],
					lli_educ_intertype: llidata["lom:educational"]["lom:educationalInteractivityType"]["rdf:label"],
					lli_educ_lang: llidata["lom:educational"]["lom:educationalLanguage"],
					lli_educ_age: llidata["lom:educational"]["lom:educationalTypicalAgeRange"]["rdf:label"],
					lli_identifier: llidata["lom:identifier"]["dcterms:identifier"]["@id"],
					lli_identifier_catalog: llidata["lom:identifier"]["lom:identifierCatalog"],
					data: JSON.stringify(llidata, null, 2)
				});
  			},
  			json: function(){
  				res.send(llidata);
  			},
  			'default': function() {
    		// log the request and respond with 406
    			res.status(406).send('Not Acceptable');
    		}
  		});
		
	
	
});

router.get('/resource', function(req,res){
	//http://data.organic-edunet.eu/resource/resource/2909
	//tmp= db.jsonld.search({'@type' : "lom:LearningObject",}, function(err, obj) {
	//db.search("*", function (err, results) {
  	console.log(JSON.stringify(llidata, null, 2));
  	res.status(200).send(llidata);
		
	
});

//return value of the whole file
module.exports = router;
