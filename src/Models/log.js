"use strict";

var mysqlConnPool = require.main.require('./src/System/Database/MySQL/connector');

module.exports.get = function(text_str, callback) {

	mysqlConnPool.getConnection(function (err, connection) {
		connection.query(
			'select * from log where log.text = ?', 
			[text_str], 
			
			function (err, result, fields) {
				connection.release();
				callback(err, result);
			}
		);
	});

}

module.exports.save = function (text_value, callback) {

	mysqlConnPool.getConnection(function (err, connection) {
		connection.query(
			'insert into log(`text`) values( ? )', 
			[text_value], 

			function (err, result, fields) {
				connection.release();
				callback(err, result);
			}
		);
	});
}


module.exports.delete = function (id, callback) {
	mysqlConnPool.getConnection(function (err, connection) {
		connection.query(
			'delete from log where log.id = ?',
			[id],
			function (err, result, fields) {
				connection.release();
				callback(err, result);
			}
		);
	});
}

