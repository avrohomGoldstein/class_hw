'use strict';

const http = require('http');

http.get(process.argv[2], res => {
    let result = '';
    res.setEncoding('utf-8');
    res.on('data', data => {
        result += data;
    });
    res.on('end', () => {
        console.log(result.length);
        console.log(result);
    });
    res.on('error', console.error);
}).on('error', console.error);