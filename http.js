// http-server.js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/html') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello, this is HTML response!</h1>');
  } else if (req.url === '/text') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, this is plain text response!');
  } else if (req.url === '/json') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Hello from JSON!' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, () => {
  console.log('HTTP Server running at http://localhost:3000/');
});
