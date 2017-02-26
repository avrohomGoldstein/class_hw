function callACallback(callback) {
    callback(1, 2, 3);
}

callACallback(console.log);