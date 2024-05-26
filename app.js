const http = require('http');

const server = http.createServer((req,res) => {

    
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }

    if(req.url === '/user'){
        res.end('hello there user');
    }
    res.end();
});

server.listen(5000);
