var sqlhelper = require('./mysql.config');

function queryTaskList (callback) {
    sqlhelper.query('select * from todos', callback);
}

function addTask (callback) {
    sqlhelper.query('insert into ');
}

module.exports.queryTaskList = queryTaskList;

