"use strict";

var fs = require('fs'),
    path = require('path');

module.exports = function (dir, ext, callback) {

    fs.readdir(dir, function (err, list) {
        if (err) {
            callback(err);
            return;
        } else {
            var filtered = [];
            list.forEach(function (f) {
                if (path.extname(f) === '.' + ext) {
                    // console.log(f);
                    filtered.push(f);
                }
            })
            callback(null, filtered);


        }
    });
}