import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());



app.get('/api/health', async (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
