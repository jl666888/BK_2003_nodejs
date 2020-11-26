const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

app.get('/get',(req,res) => {
    if(req.cookies.username){
       console.log(req.cookies);
       res.send(req.cookies.username + '欢迎回来'); 
    } else {
        res.cookie('username','admin',{maxAge: 86400 * 1000})
        res.send(req.cookies.username + '欢迎注册');
    }
})


app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})




