'use strict';

const http = require('http'),
    url = require('url');

var server = http.createServer((request, response) => {
    response.setHeader('Content-type', 'text/html');
    response.setHeader('X-Powered-By', 'PCS');

    //console.log(request.url);
    //console.log(url.parse(request.url));
    const theUrl = url.parse(request.url);

    switch (theUrl.pathname) {
        case '/index':
        case '/':
            response.write('<h1>PCS</h1>This is the home page!');
            break;
        case '/about':
            response.write('<h1>PCS</h1>PCS is a great place. It has placed thousands of people.');
            break;
        case '/sayHello':
            response.write('<p>Hello</p>');
            break;
        default:
            response.statusCode = 404;
            response.write('No such page. Sorry.<br><h1>404</h1>');
    }
    response.end();
}).listen(80);


