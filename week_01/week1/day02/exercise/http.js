//导入 http 模块
const http = require('http');

const path = require('path');

const fs = require('fs');
//创建 web 实例

const server = http.createServer();

//监听 request 请求

server.on('request',(req,res) =>{

    let pathname = req.url;
    pathname = pathname === '/' ? '/index.html' : pathname ;
    //文件名拼接
    let fileName = path.join(__dirname,'public',pathname);
    // console.log(fileName);
    fs.readFile(fileName , (err , data) => {
        if(err){
            res.statusCode = 500;
            res.end('server in error');
        }else{
            res.end(data);
        }
    })

    // if(pathname !== 'favicon.ico'){
    //     let fileName = path.join(__dirname,'public',pathname);
    //     fs.readFile(fileName,(err , data) => {
    //         if(err){
    //             res.statusCode = 500;
    //             res.end('server error');
    //         }else{
    //             res.end(data);
    //         }
    //     })

    // }
})

//启动服务

server.listen(8080,()=>{console.log('server is running at http://127.0.0.1:8080')});