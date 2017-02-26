'use strict';

if (process.argv.length < 3) {
    console.error('You must pass a file name to write');
} else {
    const fileName = process.argv[2];

    const fs = require('fs'),
        writeStream = fs.createWriteStream(fileName, 'utf-8');

    writeStream.on('data', data => {
        console.log('wrote:', data);
    });

    writeStream.on('error', error => {
        console.error('ERROR', error);
    });

    writeStream.on('finish', () => {
        console.log('finish');
    });

    writeStream.write('This is some text I have written');
    writeStream.end();
}

console.log('Done');
