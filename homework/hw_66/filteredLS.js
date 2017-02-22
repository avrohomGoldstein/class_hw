"use strict";

var fs = require('fs'),
    path = require('path');
fs.readdir(process.argv[2], function (err, list) {
    if (err) {
        console.log(err);
    } else {
        list.forEach(function (f) {
            if (path.extname(f) === '.' + process.argv[3]) {
                console.log(f);
            }
        })
    }
})