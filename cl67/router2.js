'use strict';

const http = require('http'),
    url = require('url'),
    pages = {
        '/index': '<h1>PCS</h1>This is the home page!',
        '/about': '<h1>PCS</h1>PCS is a great place. It has placed thousands of people.',
        '/sayHello': function (query) {
            return '<p>Hello ' + (query && query.name ? query.name : 'someone') + '</p>';
        }
    };

var server = http.createServer((request, response) => {
    response.setHeader('Content-type', 'text/html');
    response.setHeader('X-Powered-By', 'PCS');

    const theUrl = url.parse(request.url, true),
        page = pages[theUrl.pathname];

    console.log(theUrl);

    if (page) {
        response.write(typeof page == 'function' ?
            page(theUrl.query) :
            page);
    } else {
        response.statusCode = 404;
        response.write('No such page. Sorry.<br><h1>404</h1>');
    }
    response.end();
}).listen(80);


