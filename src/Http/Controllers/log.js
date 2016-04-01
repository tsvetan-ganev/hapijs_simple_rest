"use strict";

var LogModel = require.main.require('./src/Models/log');


module.exports.get = function (request, reply) {
	LogModel.get(request.params.text, function (error, res) {
		reply(res)
			.type('application/json')
			.code(200);
	});
}

module.exports.set = function (request, reply) {
	LogModel.save(request.payload.text, function (error, res) {
		reply(res)
			.type('application/json')
			.code(200);
	});
}

module.exports.delete = function (request, reply) {
	LogModel.delete(request.payload.id, function (error, res) {
		reply(res)
			.type('application/json')
			.code(200);
	});
}
