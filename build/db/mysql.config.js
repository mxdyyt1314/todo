//连接数据库
var mysql = require('mysql');
var config = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'db_todo'
};

function query (sql, callback) {
    var connection = mysql.createConnection(config);
    connection.connect();
    var query=connection.query(sql, function (err, rows, fields) {
        if (err) {
            console.log(err);
            return;
        }
        callback(err, rows, fields);
    });
    connection.end();
}
module.exports.query = query;