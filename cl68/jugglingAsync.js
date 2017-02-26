'use strict';

const http = require('http'),
    results = [];
let finished = 0;

function doGet(index, url) {
    http.get(url, res => {
        let result = '';
        res.setEncoding('utf-8');
        res.on('data', data => {
            result += data;
        });
        res.on('end', () => {
            results[index] = result;
            if (++finished === 3) {
                results.forEach(result => console.log(result));
            }
        });
        res.on('error', console.error);
    }).on('error', console.error);
}

for (let i = 2; i < 5; i++) {
    doGet(i - 2, process.argv[i]);
}