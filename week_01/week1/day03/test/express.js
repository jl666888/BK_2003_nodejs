const express = require('express');

const app = express();

const frontend = require('./router/frontend');
const backend = require('./router/backend');

const middleWare = require('./middlewares/middleware');

app.use(middleWare);

app.use('/frontend',frontend);
app.use('/backend',backend);

app.listen(8080,() =>{
    console.log('server is running at http://127.0.0.1:8080');
})


