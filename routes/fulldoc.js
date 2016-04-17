var express = require('express');
var router = express.Router();

const Browser = require('zombie');
const browser = new Browser();

//Browser.localhost('http://vishub.org/excursions/2209', 3000)


/* GET users listing. */
router.get('/', function(req, res, next) {
	// //console.log("Yep");
	// //putting triples into the DB
 //  //var lli = llidata.ex1;
   console.log("loading: "+req.query.res_uri);
 //  //putting data into database
   browser.visit(req.query.res_uri, function() {
   //console.log(browser.location.href);
   
 //  if(browser.)
  
   if(browser.success){
       res.status(200).send(browser.html());
     
       } ;
  browser.close();
 //  //console.log(browser.document.documentElement.innerHTML);
 //  });
 //   browser.close(); 

 //   browser.visit(req.query.res_uri)
  //        .then(function() {res.status(200).send(browser.html())});
});
 });

module.exports = router;
