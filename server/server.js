console.log('server.js sourced');

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// port decision
app.set('port', (process.env.PORT || 3030));

// spin up server
app.listen(app.get('port'), function() {
  console.log('listening on ', app.get('port'));
});

// set up public folder
app.use(express.static('public'));

// direct to path
app.get('/*', function(req,res){
    console.log('property: ', req.params[0]);
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '/public/', file));
}); //end direction