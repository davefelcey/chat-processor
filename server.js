// grab the packages we need
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.post('/', function(req, res) {
    response = "This is a sample response from your webhook!" //Default response from the webhook to show it's working
    console.log('Got POST request');
    res.setHeader('Content-Type', 'application/json'); //Requires application/json MIME type
    // "speech" is the spoken version of the response, "displayText" is the visual version
    res.send(JSON.stringify({ "speech": response, "displayText": response }));
});
         
// start the server
app.listen(port);
console.log('Server started on port: ' + port);
