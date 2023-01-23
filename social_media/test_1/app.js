var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Am I really running a server?!');
}).listen(8080, '127.0.0.1');

console.log('running server!');