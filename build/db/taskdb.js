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
               VALUES ('${todo.name}',${now.toString()},${now.toString()});`;
    sqlhelper.query(sql, (err, rows, fields) => {
        callback(err, rows);
    });
}

/**
 * 根据ID获取单个元素
 * @param {Number} id 任务编号id
 * @param {Function} callback 查询成功回调方法 
 */
function getSingle(id, callback) {
    let sql = `select * from todos where id=${id}`;
    sqlhelper.query(sql, (err, rows, fields) => {
        if (err) {
            throw new Error('database error');
        }
        if (rows && rows.length > 0) {
            callback(rows[0]);
        }
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
function removeTask(id, callback) {
    let sql = `delete from db_todo.todos where id=${id}`;
    sqlhelper.query(sql, (err, rows, fields) => {
        if (err) {
            throw new Error('database error');
        }
        callback(rows);
    });
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
module.exports.addTask = addTask;
module.exports.getSingle = getSingle;
module.exports.removeTask = removeTask;
