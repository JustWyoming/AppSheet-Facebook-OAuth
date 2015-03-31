var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
// var Facebook = require('facebook-node-sdk')
// var FB = require('./lib/helpers.js');

var app = express();

  app.set('view engine', 'ejs');

  app.use(express.static(__dirname + '/public'));

  app.use(bodyParser.urlencoded({extended:false}));
  // app.use(express.cookieParser());

  app.use(session({
    secret: 'fuckingfacebookyeah',
    resave: false,
    saveUninitialized: true
  }));

  app.use(flash());

// routes//


app.get('/', function(req, res){
  res.render('index')
});






  app.listen(process.env.PORT || 3000);