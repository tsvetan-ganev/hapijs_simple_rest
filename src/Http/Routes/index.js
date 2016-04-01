"use strict";

const fs       = require('fs');
const path     = require('path');
const baseName = path.basename(__filename);

module.exports = fs.readdirSync(__dirname)
	.filter((file) => {
		return (file.indexOf('.') !== 0) && (file !== baseName);
	})
	.map((file) => {
		return require(path.join(__dirname, file));
	})
	;


