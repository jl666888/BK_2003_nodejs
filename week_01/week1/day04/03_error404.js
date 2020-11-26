const express = require('express');

const app = express();

app.post('/post',(req,res) => {
    res.send('post');
})


app.use((req,res,next)=>{
    req.statusCode = 404;
    res.send('程序出错了~~~');
})

app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})



