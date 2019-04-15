function writeTxt(response) {
    console.log('writeTxt function called');
    response.writeHead(200, 'Content-Type', 'text/plain');
    response.write('Happy Earth Day');
    response.end();
}

function writeJson(response) {
    console.log('write JSON has been logged');
    response.writeHead(200, 'Content-Type', 'application/json');
    response.write({ text: 'hi'});
    response.end();
}

exports.writeTxt = writeTxt;
exports.writeJson = writeJson;
