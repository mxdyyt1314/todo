var express = require('express');
var router = express.Router();

router.get('/login', function (req, res) {
    console.log('query', req.query);
    console.log('body', req.body);
    if (req.query.username === 'meng' && req.query.password === '123456') {
        return res.json({
            code: 0,
            data: {
                token: 'mytoken'
            }
        })
    }
    return res.json({
        code: -1,
        msg: '登录失败'
    });
});

router.get('/task/query', function (req, res) {
    return res.json({
        code: 0,
        data: [
            { name: '去学校', done: false, createtime: Date.now() - 1000 * 60 * 8, updatetime: Date.now() - 1000 * 60 * 8 },
            { name: '敲代码学习', done: true, createtime: Date.now() - 1000 * 60 * 50, updatetime: Date.now() - 1000 * 60 * 50 },
            { name: '梦幻西游', done: true, createtime: Date.now() - 1000 * 60 * 120, updatetime: Date.now() - 1000 * 60 * 120 },
            { name: '去吃麻辣烫', done: false, createtime: Date.now() - 1000 * 60 * 140, updatetime: Date.now() - 1000 * 60 * 140 },
            { name: '坐飞机', done: true, createtime: Date.now() - 1000 * 60 * 160, updatetime: Date.now() - 1000 * 60 * 160 }]
    });
});

module.exports = router;