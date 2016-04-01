"use strict";

const server = require.main.require('./src/System/server');

const routes = require.main.require('./src/Http/Routes');

for (var route in routes) {
	server.route(routes[route]);
}

server.start(function (err) {
	if (err) {
		throw err;
	}
	console.log('Server runnign at:', server.info.uri);
});
