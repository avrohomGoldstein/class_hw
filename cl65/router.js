'use strict';

const http = require('http');

var server = http.createServer((request, response) => {
    response.setHeader('Content-type', 'text/html');
    response.setHeader('X-Powered-By', 'PCS');

    switch (request.url) {
        case '/index.html':
        case '/':
            response.write('<h1>PCS</h1>This is the home page!');
            break;
        case '/about.html':
            response.write('<h1>PCS</h1>PCS is a great place. It has placed thousands of people.');
            break;
        default:
            response.statusCode = 404;
            response.write('No such page. Sorry.<br><h1>404</h1>');
    }
    response.end();
}).listen(80);


