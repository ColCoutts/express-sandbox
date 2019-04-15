const http = require('http');
const url = require('url');


function start() {
    function onRequest(request, response){
        const pathname = url.parse(request.url).pathname;
        console.log('Pathname for ' + pathname + ' has been logged');
        route(handle, pathname, response, request);
    }
    http.createServer(onRequest).listen(3000);
    console.log('Server Connected');
}

exports.start = start;
