const { UV_FS_O_FILEMAP } = require('constants');
const fs = require('fs');
fs.writeFile('./test.txt','我是fs文件写入的',(err)=>{
    console.log(err);
})
fs.readFile('./test.txt','utf8',(err,data)=>{
    console.log(err,data);
})

// fs.unlink('./test.txt',err=>{
//     console.log(err);
// })

console.log(fs.existsSync('./test.txt'));


fs.stat('./test.txt', (err,stat) =>{
    // console.log(stat.size);
    console.log(stat);
})
