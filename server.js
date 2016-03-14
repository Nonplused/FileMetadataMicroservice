"use strict";

//dependencies
var express = require('express'),
    config = require('konfig')();
    
var routes = require('./routes')

//express
var port = config.app.port;
var app = express();

  //Views
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static('public'));

//routes
app.get('/', (req, res, err) => {
  res.render('index', {});
});
require('./routes')(app);

//server
app.listen(port, () => {
  console.log('App started, and running on port: ' + port);
});

