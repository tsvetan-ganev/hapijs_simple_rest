const fs = require('fs');
const path = require('path');

function fileWatch() {
	var date = new Date();
	console.log('Changed at: %s %s %s ', date.getFullYear(), date.getMonth() + 1, date.getDate());
}

fs.watch(__filename, fileWatch);

console.log('Adding watchers when the current file changes');
