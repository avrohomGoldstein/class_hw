'use strict';

const net = require('net'),
    server = net.createServer(function (socket) {
        const now = new Date();
        let yr = now.getFullYear();
        let mn = now.getMonth() + 1;   // starts at 0
        let dt = now.getDate();   // returns the day of month
        let hr = now.getHours();
        let min = now.getMinutes();
        let answer = yr + '-';
        if (mn < 10) {
            answer += '0';
        }
        answer += mn + '-';
        if (dt < 10) {
            answer += '0';
        }
        answer += dt + ' ';
        if (hr < 10) {
            answer += '0';
        }

        answer += hr + ':';
        if (min < 10) {
            answer += '0';
        }
        answer += min
        socket.write(answer);

        socket.end('\n');
    }).listen(+process.argv[2]);