"use strict";
var fs = require('fs'),
    path = require('path'),
    print = require('./makeItModule');
print(process.argv[2], process.argv[3], printIt);
function printIt(err, data) {
    if (err) {
        console.log(err);
    } else {
        data.forEach((d) => { console.log(d) });
    }
}