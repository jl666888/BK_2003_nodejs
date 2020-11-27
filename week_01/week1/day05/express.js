//1、导入 模块
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//2、创建 web 实例

mongoose.connect('mongodb://localhost:27017/bk2003',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3,
    },
    password:{
        type:String,
    },
    gender:{
        type:Number,
    }
})

const Module = mongoose.model('User',userSchema,'users');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

//3、定义 路由

// 新增
app.post('/add',(req,res) => {
    let post = req.body;
    Module.insertMany(post).then( ret =>{
        try {
            if(ret.length){
                res.send({res_code : 1,message : '添加成功' , data : ret[0]});
            } else {
                res.send({res_code : 0,message : '添加失败' , data : null});
            }
        } catch (err) {
            throw new Error('服务器内部错误~~~');
        }
    })
})

// 修改
app.put('/change/:id',(req,res) =>{
    let id = req.params.id;
    let put = req.body;
    console.log(id,put);
    Module.updateOne({_id:id},{$set:put},res =>{}).then( ret =>{
        console.log(ret);
    })
})

// 删除
app.delete('/del/:id',(req,res) =>{
    let id = req.params.id;
    Module.deleteOne({_id:id},err =>{}).then( ret => {
        console.log(ret);
    })
})

// 列表
app.get('/list',(req,res) => {
    Module.find().then(ret => {
        res.send({data:ret})
    })
})

// 详情
app.get('/detail/:id',(req,res) => {
    let id = req.params.id;
    Module.find({_id:id}).then(ret => {
        res.send({data:ret[0]});
    })
})




//错误中间件
app.use((err,req,res,next) => {
    res.send('Error:' + err.message);

})
//4、启动服务

app.listen(8080,() =>{
    console.log('server is running at http://127.0.0.1:8080');
})


