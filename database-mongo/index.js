var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  quantity: Number,
  description: String
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  //do something
};

module.exports.selectAll = selectAll;