const http = require('http');

const server = http.createServer((req, res) => {
 
  res.setHeader('Content-Type', 'text/plain');
  
 
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Welcome to the homepage');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('This is the about page');
  } else if (req.url === '/api/data') {
    
    const data = {
      name: 'John Doe',
      age: 30,
      city: 'New York'
    };

    
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    
   
    res.end(JSON.stringify(data));
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
});


server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});
