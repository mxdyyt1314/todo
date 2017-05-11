//连接数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'db_todo'
});

connection.connect();
//查询
connection.query('select * from todos;', function (err, rows, fields) {
    // console.log(rows);
    console.log(rows);
});
//关闭连接
connection.end();