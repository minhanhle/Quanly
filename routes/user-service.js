var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var user = require('../model/user');

var usermodel = mongoose.model('user', user);

/* GET users listing. */
user.methods(['post']);
user.register(router,'/user'); 

router.get('/login', function(req, res, next) {
	var username = req.query.username;
	var passwork = req.query.passwork;
	usermodel.findOne({'username': username, 'passwork': passwork}, function(err, data) {
		if(err)
			res.send(err);
		res.send(data);
	})
});
module.exports = router;