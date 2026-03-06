const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'tradeify',
    password: 'password'
});

module.exports = pool.promise();