'use strict';

const net = require('net'),
    server = net.createServer(function (socket) {
        const now = new Date();
        socket.write(now.toLocaleDateString() + ' ');
        socket.write(now.toLocaleTimeString());
        socket.end('\n');
    }).listen(+process.argv[2]);