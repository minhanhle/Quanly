var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var quan = require('../model/quan');

var quanmodel = mongoose.model('quan');

/* GET users listing. */
quan.methods(['get','put','post','delete']);
quan.register(router,'/quan'); 

module.exports = router;