'use strict';

function Person(name, email) {
    this.name = name;
    this.email = email;
}

Person.prototype.print = function () {
    console.log('Name:', this.name);
    console.log('email:', this.email);
}

//exports.Person = Person;
module.exports = Person;

console.log('exports', exports);
console.log('module.exports', module.exports);