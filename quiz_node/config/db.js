const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',     // keep empty for XAMPP
  database: 'quiz' // create this DB in phpMyAdmin
});
connection.connect((err) => {
  if (err) {
    console.log('DB connection failed:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});
module.exports = connection;
