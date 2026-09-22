import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Create a connection pool for better performance and resource management
export const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'wamdp',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Helper function to test the connection
export async function testDbConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Successfully connected to MySQL database');
    connection.release();
    return true;
  } catch (error) {
    console.error('❌ Error connecting to MySQL database:', error);
    return false;
  }
}
