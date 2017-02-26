'use strict';

//var exports = module.exports = {};

const name = 'Bob';

function getGreeting() {
    return 'hello ' + name;
}

module.exports = {
    sayHello: function () {
        console.log(getGreeting());
    },
    sayGoodbye: function () {
        console.log('Goodbye');
    }
};
