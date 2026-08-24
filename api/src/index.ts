import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Basic MySQL connection config (not actively connecting on boot yet, just showing it's ready)
// You would configure this with environment variables in a real app
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydb',
};

app.get('/api/health', async (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
