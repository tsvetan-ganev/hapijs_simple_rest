"use strict";

var Hapi     = require('hapi');
const server = new Hapi.Server();
const config = require.main.require('./src/Config/general');

server.connection({
	host: config.host,
	port: config.port
});

module.exports = server;
