var mysql = require('mysql');
var connectionString = 'mysql://root:1234@localhost/dbaulas';

var db = {
	connect: function(query, callback){
		var connection = mysql.createConnection(connectionString);
		connection.query(query, function(err, rows){
			callback(err, rows);
			connection.end();
		});
	}
}

module.exports = db;