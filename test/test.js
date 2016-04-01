"use strict";

var assert      = require('assert')
	, supertest = require('supertest')
	, config    = require('../src/Config/general')
	, server    = supertest.agent("http://" + config.host +  ":" + config.port)
	, testStr   = '__test__'
	, logId     = -1
	;

describe('Log ReST Api part', function () {

	it('Testing /log/set', function (done) {
		var log = { text : testStr};
		server.post('/log/set/').send(log).end(function (err, result) {

			assert.ifError(err);
			var data = JSON.parse(result.text);

			assert.equal(result.statusCode, 200);
			assert.equal(data.affectedRows, 1);
			logId = data.insertId;

			done();
		});

	});
	
	it('Testing /log/get/' + testStr, function (done) {
		server.get('/log/get/' + testStr).end(function (err, result) {
			assert.ifError(err);
			
			var data = JSON.parse(result.text);

			assert.equal(result.statusCode, 200);
			assert.equal(data[0].text, testStr);

			done();
		});
		//
	});

	it('get param less than 3 chars', function (done) {
		server.get('/log/get/' + testStr.substr(0, 2)).end(function (err, result) {
			assert.ifError(err);
			
			var data = JSON.parse(result.text);

			assert.equal(result.statusCode, 400);
			assert.equal(data.error, 'Bad Request');

			done();
		});
		//
	});



	it('Testing /log/delete', function (done) {
		server.post('/log/delete/').send({id: logId}).end( function(err, result) {
			assert.ifError(err);

			var data = JSON.parse(result.text);
			assert.equal(data.affectedRows, 1);
			done();
		});
	});

	it('Testing /log/delete with string id', function (done) {
		server.post('/log/delete/').send({id: testStr}).end( function(err, result) {
			assert.ifError(err);

			var error = JSON.parse(result.error.text);
			assert.equal(error.statusCode, 400);
			assert.equal(error.error, 'Bad Request');
			done();
		});
	});

});
