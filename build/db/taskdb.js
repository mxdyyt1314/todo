var sqlhelper = require('./mysql.config');

/**
 * 获取任务列表
 * @param {any} callback
 */
function queryTaskList(callback) {
    sqlhelper.query('select * from todos', callback);
}

/**
 * 添加任务
 * @param {*} todo
 * @param {*} callback
 */
function addTask(todo, callback) {
    let now = Date.now();
    let sql = `INSERT INTO db_todo.todos (name,createtime,updatetime) 
               VALUES ('${todo.name}',${todo.createtime.toString()},${todo.updatetime.toString()});`;
    sqlhelper.query(sql, (err, rows, fields) => {
        callback(err, rows);
    });
}

/**
 * 修改任务
 * @param {any} todo
 * @param {any} callback
 */
function updateTask(todo, callback) {
    let now = Date.now();
    let sql = `update db_todo.todos 
               set name='${todo.name}',updatetime=${now.toString()} where id=${todo.id}`;
    sqlhelper.query(sql, (err, rows, fields) => {
        callback(err, rows);
    });
}

/**
 * 移除任务
 */
function removeTask() {

}

/**
 * 任务排序
 */
function sortTask() {

}

// addTask({
//     name: '测试任务',
//     createtime: Date.now(),
//     updatetime: Date.now()
// }, () => { });

//noinspection JSUnresolvedVariable
module.exports.queryTaskList = queryTaskList;

