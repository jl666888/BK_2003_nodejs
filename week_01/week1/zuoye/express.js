//1、导入 express模块
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { json } = require('body-parser');

//2、创建 web 实例
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//连接数据库

mongoose.connect('mongodb://localhost:27017/bk2003', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        minlength: 1,
    },
    gender: {
        type: Number,
    },
    email: {
        type: String,
    }
})
const Module = mongoose.model('User', userSchema, 'lists');

app.use(express.static('public'));
//3、定义路由
app.post('/add', (req, res) => {
    let post = req.body;
    // console.log(post);
    Module.insertMany(post).then(ret => {
        // console.log(ret);
        try {
            if (ret.length) {
                res.send({ res_code: 1, message: '新增成功', data: ret[0] });
            } else {
                res.send({ res_code: 0, message: '新增失败', data: [] });
            }
        } catch (err) {

        }
    })

})
app.delete('/del/:id', (req, res) => {
    let id = req.params.id;
    Module.deleteMany({ _id: id }).then(ret => {
        // console.log(ret);
        try {
            if (ret.ok) {
                res.send({ res_code: 1, message: '删除成功' });
            } else {
                res.send({ res_code: 0, message: '删除失败' });
            }
        } catch (err) {

        }
    })

})
app.put('/update/:id/:del?', (req, res) => {
    let id = req.params.id;
    console.log(id);
    let put = req.body;
    if (!req.params.del) {

        Module.update({ _id: id }, { $set: put }).then(ret => {
            try {
                if (ret.ok) {
                    res.send({ res_code: 1, message: '修改成功' });
                } else {
                    res.send({ res_code: 0, message: '修改失败' });
                }

            } catch (err) {

            }
        })
    } else {
        

        Module.update({ _id: id },{$set:{__v : 1}}).then(ret => {
            console.log(ret);
            try {
                if (ret.ok) {
                    res.send({ res_code: 1, message: '修改成功' , });
                } else {
                    res.send({ res_code: 0, message: '修改失败' });
                }

            } catch (err) {

            }
        })
    }

})
app.get('/list', (req, res) => {
    Module.find().then(ret => {
        res.send(JSON.stringify({ data: ret }));
    })
})
app.get('/detail/:id', (req, res) => {
    let id = req.params.id;

    Module.find({ _id: id }).then(ret => {
        console.log(id, ret.id);
        try {
            if (id) {
                res.send({ res_code: 1, message: '查询成功', data: ret });
            } else {
                res.send({ res_code: 0, message: '查询失败', data: null });
            }

        } catch (err) {

        }
    })



})



//4、启动服务
app.listen(8080, () => {
    console.log('server is ruuning at http://127.0.0.1:8080');
})


