"use strict";

var http = require('http'),
    bl = require('bl'),
    count = 0,
    str1 = process.argv[2],
    str2 = process.argv[3],
    str3 = process.argv[4],
    urls = [str1, str2, str3];
function httpGet(url) {
    http.get(url, function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                console.log(err);
                return;
            }
            else {

                urls[count] = (data.toString());
                count++;
                if (count == 3) {
                    printResults()
                }
            }
        })
        )
    })
}
for (var i = 0; i < 3; i++) {
    httpGet(urls[i]);
}
function printResults() {
    for (var i = 0; i < 3; i++) {
        console.log(urls[i]);
    }
}
/* var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
       function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
          results[index] = data.toString()
          count++

          if (count === 3) {
            printResults()
          }
        }))
      })
    }

    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }*/