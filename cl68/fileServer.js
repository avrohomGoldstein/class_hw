'use strict';
'use strict';

const http = require('http'),
    fs = require('fs'),
    path = require('path'),
    contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript'
    };

var server = http.createServer((request, response) => {
    console.log('serving', request.url);

    const ext = path.extname(request.url);
    if (ext && contentType[ext]) {
        response.setHeader('Content-type', contentType[ext]);
    }
    response.setHeader('X-Powered-By', 'PCS');

    /*const rs = fs.createReadStream('content/' + request.url, 'utf-8');

    / *rs.on('data', data => response.write(data));
    rs.on('end', () => response.end());* /
    rs.pipe(response);

    rs.on('error', err => {
        response.setHeader('Content-type', contentType['.html']);
        if (err.code === 'ENOENT') {
            response.statusCode = 404;
            response.write('No such page. Sorry.<br><h1>404</h1>');
        } else {
            response.statusCode = 500;
        }
        response.end(err.message);
        return;
    });
    */

    fs.readFile('content/' + request.url, 'utf-8', (err, data) => {
        if (err) {
            response.setHeader('Content-type', contentType['.html']);
            if (err.code === 'ENOENT') {
                response.statusCode = 404;
                response.write('No such page. Sorry.<br><h1>404</h1>');
            } else {
                response.statusCode = 500;
            }
            response.end(err.message);
            return;
        }
        response.end(data);
    });
}).listen(80);


