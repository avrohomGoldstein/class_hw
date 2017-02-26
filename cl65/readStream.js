'use strict';

if (process.argv.length < 3) {
    console.error('You must pass a file name to read');
} else {
    const fileName = process.argv[2];

    const fs = require('fs'),
        readStream = fs.createReadStream(fileName, 'utf-8');

    readStream.on('data', data => {
        console.log('read:', data);
    });

    readStream.on('error', error => {
        console.error('ERROR', error);
    });

    readStream.on('end', () => {
        console.log('end');
    });
}

console.log('Done');
