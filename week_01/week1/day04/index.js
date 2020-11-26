const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const middle = require('./middle');
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(middle);

app.get('/post',(req,res) =>{
    let query = req.query;
    console.log(query);
    res.send('<h1>hello</h1>')
})


app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
});

