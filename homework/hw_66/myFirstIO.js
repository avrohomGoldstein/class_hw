"use strict";

var fs = require('fs');
var data = fs.readFileSync(process.argv[2]).toString();
var lines = data.split('\n');
console.log(lines.length - 1);

