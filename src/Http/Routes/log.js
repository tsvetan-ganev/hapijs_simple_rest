"use strict";

var LogController = require.main.require('./src/Http/Controllers/log');
var Joi = require('joi');

module.exports = function() {

	return [
		{
			method: 'GET',
			path: '/log/get/{text}',
			handler: LogController.get,
			config: {
				validate: {
					params: {
						text: Joi.string().min(3).max(50)
					}
				}
			}
		},
		{
			method: 'POST',
			path: '/log/set/',
			handler: LogController.set,
			config: {
				validate: {
					payload: {
						text: Joi.string().min(3)
					}
				}
			}
		},
		{
			method: 'POST',
			path: '/log/delete/',
			handler: LogController.delete,
			config: {
				validate: {
					payload: {
						id: Joi.number().integer().min(1) 
					}
				}
			}
		}
	]
}();

