'use strict';

const EventEmitter = require('events').EventEmitter,
    emitter = new EventEmitter();

emitter.on('second', () => {
    console.log(new Date().toLocaleTimeString());
});

emitter.on('minute', () => {
    console.log('----------------------------->', new Date().toLocaleTimeString());
});

setInterval(() => {
    //console.log(new Date().toLocaleTimeString());
    emitter.emit('second');
}, 1000);

setInterval(() => {
    emitter.emit('minute');
}, 60000);

/*var button = document.getElementById('foo');
button.addEventListener('click', () => {
    alert('button was clicked');
});*/