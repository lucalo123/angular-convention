var express = require('express');

var app = express();

var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV;

switch (env) {
    case 'build':
        console.log('In build-environment.');
        app.use(express.static('./build/'));
        app.use('/*', express.static('./build/index.html'));
        break;
    default:
        console.log('In dev-environment.');
        app.use(express.static('./src/client/'));
        app.use(express.static('./'));
        app.use('/*', express.static('./src/client/index.html'));
        break;
}

app.listen(port, function () {
    console.log('Running server on port ' + port);
});