'use strict';

let oldMessages = '';
const net = require('net'),
    sockets = [],
    server = net.createServer(function (socket) {
        sockets.push(socket);
        socket.write(oldMessages);

        socket.on('data', data => {
            oldMessages += data;
            sockets.forEach(s => {
                if (s !== socket) {
                    s.write(data);
                }
            });
        });

        socket.on('end', () => {
            sockets.splice(sockets.indexOf(socket), 1);
        });

        socket.on('error', () => {
            sockets.splice(sockets.indexOf(socket), 1);
        });
    }).listen(+process.argv[2]);