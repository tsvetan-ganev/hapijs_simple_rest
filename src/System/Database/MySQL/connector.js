"use strict";

const dbConfig = require.main.require('./src/Config/database');

const mysql = require('mysql');
const mysqlConnPool = mysql.createPool(dbConfig.production);

// mysqlConnPool.connect(function (err) {
// 	console.log('MYSQL server err: ' + err);
// });

module.exports = mysqlConnPool;
