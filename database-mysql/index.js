var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'FILL_ME_IN',
  database : 'test'
});

var selectAll = function(callback) {
  //do something
};

module.exports.selectAll = selectAll;
