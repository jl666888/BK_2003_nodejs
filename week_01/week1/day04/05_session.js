const express = require('express');

const session = require('cookie-session');

const app = express();

app.use(session({
    name:'hahaha',
    secret:'sdfafsavsasaaf',
    maxAge:20*60*1000
}))

app.get('/get',(req,res) => {
    if(!req.session['viwe']){
        console.log(req.session["viwe"]);
        req.session["viwe"] = 1;
    } else {
        req.session["viwe"]++;
        console.log(req.session)
    }
    res.send(`总共访问了${req.session["viwe"]}次`);
})

app.listen(8080,()=>{
    console.log('server is running at http://127.0.0.1:8080');
})

