const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cinema',
});

connection.connect((err) => {
    if (err) throw err;
});

var sql = 'select * from films';

connection.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
});
