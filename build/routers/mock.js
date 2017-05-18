var express = require('express');
var router = express.Router();
var taskdb = require('../db/taskdb.js')

router.get('/login', function (req, res) {
    if (req.query.username === 'meng' && req.query.password === '123456')
        return res.json({ code: 0, data: { token: 'mytoken' } });
    return res.json({ code: -1, msg: '登录失败' });
});

router.get('/task/query', function (req, res) {
    var rows = taskdb.queryTaskList(function (err, rows, fileds) {
        return resJson(res, rows);
    });
});

router.post('/task/add', (req, res) => {
    let todo = req.body.todo;
    taskdb.addTask({ name: todo.name }, (err, rows) => {
        let id = rows.insertId;
        taskdb.getSingle(id, todo => {
            resJson(res, todo);
        });
    });
});

router.post('/task/remove', (req, res) => {
    let id = req.body.id;
    taskdb.removeTask(id, (rows) => {
        console.log(rows);
        resJson(res, rows);
    });
});

function resJson(res, data, code = 0) {
    return res.json({
        code: code,
        data: data
    });
}

module.exports = router;