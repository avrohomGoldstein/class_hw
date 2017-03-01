
const url = require('url'),
    fs = require('fs');

module.exports = function (request, response, next) {



    fs.readFile('.' + request.url, (err, data) => {
        console.log(request.url);
        if (err) {
            console.log(err);
            next();
        }
        //  if (data) {
        console.log(data);
        response.end(data);
        next();
        //  }
    });

}