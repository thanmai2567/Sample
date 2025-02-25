const http = require('http');


const server = http.createServer((req, res) => {
    
    if (req.url === '/error') {
        res.statusCode = 500; 
        res.setHeader('Content-Type', 'text/plain');
        res.end('500 Internal Server Error');
        return;
    }

    if (req.method === 'GET') {
        if (req.url === '/home') {
            res.statusCode = 200; 
            res.setHeader('Content-Type', 'text/plain');
            res.end('welcome to home');
        }
        
           else if (req.url === '/About') {
                res.statusCode = 200; 
                res.setHeader('Content-Type', 'text/plain');
                res.end('welcome to contact about');
            }
            
               else if (req.url === '/contact') {
                    res.statusCode = 200; 
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('welcome to contact page');
                }
        
        
        else {
            
            res.statusCode = 404; 
            res.setHeader('Content-Type', 'text/plain');
            res.end('404 Not Found');
        }
    } else {
       
        res.statusCode = 404; 
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 Not Found');
    }
});


server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
