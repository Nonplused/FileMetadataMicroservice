"use strict";

//dependencies
var express = require('express'),
    config = require('konfig');

//express
var port = config.app.port;
var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

//routes

//server
app.listen(port, () => {
  console.log('App started, and running on port: ' + port);
});

