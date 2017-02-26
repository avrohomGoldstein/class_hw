'use strict';

const fs = require('fs'),
    path = require('path'),
    ext = '.' + process.argv[3];

fs.readdir(process.argv[2], (err, files) => {
    if (err) {
        console.log(err);
        return;
    }

    files.filter(f => path.extname(f) === ext).forEach(f => console.log(f));
});
