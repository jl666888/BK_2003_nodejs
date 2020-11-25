const fs = require('fs');
const os = require('os');

let middleWare = function(req,res,next){
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth()*1 + 1;
    let day = time.getDate();
    let hours = time.getHours();
    let min = time.getMinutes();
    let s = time.getSeconds();
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hours = hours < 10 ? '0' + hours : hours;
    min = min < 10 ? '0' + min : min ;
    s = s < 10 ? '0' + s : s ;
    let time1 = `${year}-${month}-${day} ${hours}:${min}:${s}`;
    let host = req.headers.host;
    let method = req.method;
    let url = req.url;
    let user = req.headers["user-agent"];

    fs.appendFile('./log.txt', host + '  / ' + user +'  / ' + method + '  / ' + url + '  / ' + time1 + os.EOL , err => {});

    next();
}

module.exports = middleWare;

