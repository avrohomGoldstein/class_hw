const app = require('connect')();

app.use(require('./server'));

app.use((req, res, next) => {
    res.end('<h1>Hello World!</h1>');
    next();
});


app.listen(80);