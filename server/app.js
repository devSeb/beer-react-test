var express = require('express');
//  allow origin ,  allow communication in localhost
var cors = require('cors');
var request = require('request');

// xml2js parser instance
var xml2js = require('xml2js');
var parser = new xml2js.Parser();


var app = express();

app.use(cors());


var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


var listBeers = [];
var url = "http://api.brewerydb.com/v2/beers/?key=8ca7a31deaabc9d1064da6eccf48bdd8&styleId=15";

var resBeers = function parseUrl(url) {
    //console.log("parseURL = ", url);

    request.get(url, function(error, request, body) {
        // Parse data
        //console.log("request :", url, body);

        if ( body !== null) {
            //console.log(body);
            var json = JSON.parse(JSON.stringify(body));
            //console.log("json = ", json);
            listBeers.push(json);
        }
    });
};


resBeers(url);

/** REST  **/
app.get('/beers', function(request,response) {
    response.json({listBeers: listBeers});
});




app.listen(8081);


