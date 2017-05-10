//连接数据库
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'communet'
});

connection.connect();
//查询
connection.query('select * from h5_edit_html_pc;', function (err, rows, fields) {
    // console.log(rows);
    console.log(fields);
});
//关闭连接
connection.end();