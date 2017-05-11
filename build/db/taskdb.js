var sqlhelper = require('./mysql.config');

function queryTaskList (callback) {
    sqlhelper.query('select * from todos',callback);
}
module.exports.queryTaskList = queryTaskList;

