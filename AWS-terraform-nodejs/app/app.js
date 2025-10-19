const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = process.env.PORT || 80;
const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection failed:', err));

app.get('/', (req, res) => res.send('Node.js + MongoDB App Running on ECS'));

app.listen(port, () => console.log(`Server running on port ${port}`));