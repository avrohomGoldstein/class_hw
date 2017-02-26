const fs = require('fs');

fs.readFile('readFileAsync.js', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log(data.split('').reverse().join(''));

        let reversedString = '';
        for (let i = data.length - 1; i >= 0; i--) {
            reversedString += data.charAt(i);//data[i];
        }

        console.log(reversedString);
    }
});

/*function wasteTime(callback) {
    for (let i = 0; i < 10; i++) {
        console.log('wasting time', i);
    }
    callback();
}

wasteTime(() => {
    console.log('Done wasting time');
});

console.log('done');*/
