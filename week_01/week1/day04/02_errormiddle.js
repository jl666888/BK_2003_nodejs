const express = require('express');
const fs = require('fs');

const app = express();

app.get('/post',(req,res) => {
    try {
        let data = fs.readFileSync('lo2.txt');
        res.send(data);
    } catch(err) {
        console.log(err);
        console.log(Error);
        throw new Error('程序出错了~~~');
    }

})

app.use((err,req,res,next) => {
    // console.log(err);
    res.send('Error:' + err.message );
})


app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})

