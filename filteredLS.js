"use strict";

var fs = require('fs');
fs.readdir(process.argv[2], function (err, list) {
    if (err) {
        console.log(err);
    } else {
        list.forEach(function (path) {
            if (path.extname(path) === process.argv[3]) {
                console.log(path);
            }
        })
    }
})