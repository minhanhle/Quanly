var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var yeucau = require('../model/yeucau');

var yeucaumodel = mongoose.model('yeucau', yeucau);

/* GET users listing. */
yeucau.methods(['post']);
yeucau.register(router,'/yeucau'); 

router.get('/yeucau', function(req, res, next) {
	yeucaumodel.find({}, function(err, data) {
		if(err)
			res.send(err);
		res.send(data);
	})
});

router.get('/getid', function(req, res, next) {
	yeucaumodel.find({}, function(err, data) {
		if(err){
			res.send(err);
		}
		if(data.length === 0){
			res.send('YC001');
		}else {
			var lastID = data.slice(-1).pop().mayc;
			var index =  parseInt(lastID.substring(2));
			index = index + 1;
			if(index<10){
				res.send("YC00"+index);
			}else if (index<100) {
				res.send("YC0"+index);
			}else if(index < 1000){
				res.send("YC"+index);
			}
		}
	})
})

router.get('/notification', function(req, res) {
	yeucaumodel.find({'trangthai': "Bắt đầu"}, function(err, data, next) {
		if(err)
			res.send(err);
		res.send(data);
	})
})

router.put('/yeucau/:mayc', function(req, res, next) {
	yeucaumodel.findOneAndUpdate({'mayc': req.params.mayc},req.body, function(err, data) {
		if(err)
			res.send(err);
		res.send(data)
	})
});

router.delete('/yeucau/:mayc', function(req, res, next) {
	yeucaumodel.remove({'mayc': req.params.mayc}, function(err, result) {
		if(err)
			res.send(err);
		else
			res.send({messages:"Xóa thành công"});
	})
});

router.get('/yeucau/:mayc', function(req, res, next) {
	yeucaumodel.findOne({'mayc': req.params.mayc}, function(err, data) {
		if(err)
			res.send(err);
		res.send(data);
	})
});

module.exports = router;