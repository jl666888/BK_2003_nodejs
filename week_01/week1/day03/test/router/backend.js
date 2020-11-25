const express = require('express');

const router = express.Router();

router.get('/ind',(req,res) => {
    res.send('后端首页');
})

router.post('/putout',(req,res) => {
    res.send('后端退出');
})

router.put('/log',(req,res) => {
    res.send('后端登录 put请求');
})
router.delete('/log',(req,res) => {
    res.send('后端登录 delete请求');
})

module.exports = router;

