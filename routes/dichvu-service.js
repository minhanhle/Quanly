var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var dichvu = require('../model/dichvu');

var dichvumodel = mongoose.model('dichvu');

/* GET users listing. */
dichvu.methods(['get','put','post','delete']);
dichvu.register(router,'/dichvu'); 

module.exports = router;