"use strict";

var fs = require('fs');
var str = fs.readFile(process.argv[2], 'utf-8', function (err, data) {
    if (!err) {
        console.log(data.split('\n').length - 1);
    }
})