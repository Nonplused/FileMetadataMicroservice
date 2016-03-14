'use strict';

var express = require('express'),
    ReadFileController = express.Router();
    
ReadFileController.get('/', (req, res, err) => {
    res.render('test', {});
});

module.exports = ReadFileController;