"use strict";

var http = require('http'),
    fs = require('fs'),
    server = http.createServer(function (req, res) {


        const sourceName = process.argv[3],

            src = fs.createReadStream(sourceName);

        src.pipe(res);
    });
server.listen(process.argv[2])