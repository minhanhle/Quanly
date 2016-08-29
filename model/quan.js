var restful = require('node-restful');
var mongoose = restful.mongoose;

var quanSchema = new mongoose.Schema({
    tenquan : {type: String, unique: true},
    tenkhuvuc : String
});
module.exports = restful.model('quan',quanSchema);