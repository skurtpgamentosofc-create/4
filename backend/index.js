const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database
let registros = [];

// API Endpoints
app.get('/api/registros', (req, res) => {
  res.json(registros);
});

app.post('/api/registros', (req, res) => {
  const { date, weight } = req.body;
  if (!date || !weight) {
    return res.status(400).json({ error: 'Date and weight are required' });
  }
  const newEntry = { id: Date.now(), date, weight };
  registros.push(newEntry);
  res.status(201).json(newEntry);
});


app.get('/', (req, res) => {
  res.send('Hello World! This is the backend.');
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
