var exec = require('child_process').exec

function start(response) {
    console.log("Request handler 'start' was called.");
    
    exec('find /', 
    { timeout: 10000, maxbuffer: 20000*1024 },
    function(error, stdout, stderr){
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(stdout);
        response.end();
    })
};

function upload() {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello World');
    response.end();
};

exports.start = start;
exports.upload = upload;