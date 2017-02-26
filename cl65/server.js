'use strict';

const http = require('http');
//global.x = 5;

/*const trump = {
    name: 'Donald Trump',
    email: 'dtrump@whitehouse.gov',
    age: 69
};*/

var server = http.createServer((request, response) => {
    response.setHeader('Content-type', 'text/plain');
    //response.setHeader('Content-type', 'application/json');
    response.setHeader('X-Powered-By', 'PCS');
    //response.end('Hello World!');
    //response.end(JSON.stringify(trump));
    response.statusCode = 404;
    response.end('This really is not the page you are looking for. 404');
}).listen(80);

server.once('connection', (stream) => {
    console.log('Ah, we have our first user!');
});
