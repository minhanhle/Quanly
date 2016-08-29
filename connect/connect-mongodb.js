var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports.mongoose = mongoose;
module.exports.Schema = Schema;


// Connect to mongo
function connect() {
	var url = 'mongodb://minhanh:minhanh94@ds029725.mlab.com:29725/thuctap'
	mongoose.connect(url);
	console.log('mongoDB_driver - connect success to db');
}
function disconnect() {mongoose.disconnect()}
module.exports.connect = connect();