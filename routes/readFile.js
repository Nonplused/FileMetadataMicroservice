'use strict';

var express = require('express'),
    ReadFileController = express.Router(),
    multer = require('multer'),
    upload = multer({dest: "../temp/"});
    
ReadFileController.post('/', upload.single('file'), (req, res) => {
    res.json({'size': req.file.size});
});

module.exports = ReadFileController;