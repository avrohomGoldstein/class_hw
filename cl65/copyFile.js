'use strict';

if (process.argv.length < 4) {
    console.error('You must pass a file name to copy and a name for the new copy');
} else {
    const sourceName = process.argv[2];
    const copyName = process.argv[3];

    const fs = require('fs'),
        readStream = fs.createReadStream(sourceName, 'utf-8'),
        writeStream = fs.createWriteStream(copyName, 'utf-8');

    writeStream.write('/*Copyright PCS 2017*/\n');

    /*readStream.on('data', data => {
        writeStream.write(data);
    });*/
    readStream.pipe(writeStream);

    readStream.on('error', error => {
        console.error('ERROR', error);
    });

    /*readStream.on('end', () => {
        writeStream.write('\n/*Copyright PCS 2017* /\n');
        writeStream.end();
    });*/
}

console.log('Done');
