"use strict";

var http = require('http'),
    bl = require('bl');
http.get(process.argv[2], function (response) {
    /* response.setEncoding('utf8');
     response.on('data', function (ds) {
         collection += ds;
     });
     response.on('end', function(){console.log(collection)});
     response.on('error', console.error);
 }).on('error', console.error);*/
    response.pipe(bl(function (err, data) {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log(data.length);
            console.log(data.toString());
        }
    })
    )

})