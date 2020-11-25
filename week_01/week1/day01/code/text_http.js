const http = require('http');
const url = require('url');
const server = http.createServer();
server.on('request',(req,res)=>{
    if(req.url === '/'){
        res.end('hello world!');
    }
    if(req.url === '/html5'){
        res.end('123');
    }
})

server.listen(8080,()=>{
    console.log('response is running at http://127.0.0.1:8080');
})
