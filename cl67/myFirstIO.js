'use strict';

const fs = require('fs'),
    data = fs.readFileSync(process.argv[2], 'utf-8');
console.log(data.split('\n').length - 1);
