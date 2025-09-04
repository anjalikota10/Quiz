const mysql = require('mysql2');

// Create connection pool instead of single connection
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'quizuser',
  password: process.env.DB_PASSWORD || 'quiz@5678',
  database: process.env.DB_NAME || 'quiz',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  acquireTimeout: 60000,
  timeout: 60000,
  reconnect: true,
  idleTimeout: 300000,
  // Handle disconnections
  handleDisconnects: true
});

// Test the pool connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ DB pool connection failed:', err.message);
    console.error('Connection details:', {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER || 'quizuser',
      database: process.env.DB_NAME || 'quiz'
    });
  } else {
    console.log('✅ Connected to MySQL database with connection pool');
    connection.release(); // Release the connection back to pool
  }
});

// Handle pool errors
pool.on('connection', function (connection) {
  console.log('New connection established as id ' + connection.threadId);
});

pool.on('error', function(err) {
  console.error('Database pool error:', err);
  if(err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.log('Database connection was closed. Pool will reconnect.');
  }
});

module.exports = pool;
