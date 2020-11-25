const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('abcd');
})
app.get('/login.html',(req,res)=>{
    res.send('aaaaaa');
})
app.post('/post',(req,res)=>{
    res.send('post');
})

app.post('/p',(req,res) => {
    res.send('我是post请求返回的数据');
})

app.listen(8080,()=>{console.log('server is running at http://127.0.0.1:8080')});