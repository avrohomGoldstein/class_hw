'use strict';

const name = 'Bob';

function getGreeting() {
    return 'hello ' + name;
}

exports.sayHello = function () {
    console.log(getGreeting());
};

exports.sayGoodbye = function () {
    console.log('Goodbye');
};
