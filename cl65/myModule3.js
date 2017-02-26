'use strict';

//var exports = module.exports = {};

const name = 'Bob';

function getGreeting() {
    return 'hello ' + name;
}

module.exports = function () {
    console.log(getGreeting());
};
