const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'guilherme01',
  database: 'StoreManager',
  port: 3001,
});

module.exports = connection;