var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');

var app = express();

//set bodyparser middle layer
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


//route
app.get('/', function(req, res){
	res.render('index');
});

app.listen(3000);
console.log('Server is running on port 3000');