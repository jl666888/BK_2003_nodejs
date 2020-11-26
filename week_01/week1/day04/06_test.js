const os = require('os');
const path = require('path');
const url = require('url');
const fs = require('fs');
const querystring = require('querystring');
const http = require('http');


console.log(global); //全局
console.log(__filename);    //文件所在地址
console.log(__dirname);     //文件所在目录

console.log(os.EOL);   //换行符

console.log(os.cpus());   //cpu信息

console.log(os.freemem());  //剩余内存

console.log(os.totalmem());  //总内存

console.log(os.hostname());  //主机名

console.log(path.dirname(__dirname));
console.log(path.extname('index.html'));
console.log(path.basename(__dirname));
console.log(path.join('a','b','c'));
console.log(path.resolve('a','b','c'));

console.log(url.parse('https://127.0.0.1:8080?name=123&age=123',true));
console.log(url.resolve('https://127.0.0.1:8080/foo','bar'));

console.log(querystring.parse('name=13&age=123'));
console.log(querystring.encode('name=123&age=123'));
console.log(querystring.stringify({name:"1324",age:132}));

const server = http.createServer();

server.get('/get',(req,res) =>{
    res.end('wer');
})

server.listen(8080,()=>{console.log('server is running at http://127.0.0.1:8080')});

fs.writeFile('./log.txt','haahsdfs',err => {});
fs.appendFile('./log.txt','ashfsf',err => {});
fs.readFile('./log.txt',(err,data)=>{});






