var express = require('express');
var router = express.Router();
var jsdom = require("jsdom");

router.get('/', function(req, res, next) {
    

    jsdom.env(req.query.res_uri, ["http://code.jquery.com/jquery.js"], function (err, window) {
        res.status(200).send(window.document.querySelector( 'html' ).outerHTML);
        window.close();
    }
);

});


module.exports = router;