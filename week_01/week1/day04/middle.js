
// const fs = require('fs');

const middle = (req,res,next) => {
    console.log(req.body);
    console.log(req.query);
    console.log(req);
    next();
    // fs.appendFile('log1.txt','')
}

module.exports = middle;

