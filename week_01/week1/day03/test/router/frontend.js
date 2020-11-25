const express = require('express');

const router = express.Router();


router.post('/index',(req,res) => {
    res.send('前端首页');
})

router.get('/login',(req,res) => {
    res.send('前端登录');
})

router.put('/cart',(req,res) => {
    res.send('前端购物车 put请求');
})

router.delete('/cart',(req,res) => {
    res.send('前端购物车 delete请求');
})



module.exports = router;