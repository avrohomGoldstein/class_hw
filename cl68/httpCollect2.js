'use strict';

const http = require('http'),
    bl = require('bl');

http.get(process.argv[2], res => {
    res.pipe(bl((err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
    res.on('error', console.error);
}).on('error', console.error);