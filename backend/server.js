const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const { testConnection } = require('./db');
const authRoutes = require('./routes/authRoutes');
const cropRoutes = require('./routes/cropRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (_req, res) => {
  res.json({ message: 'FarmEase API is running' });
});

app.use('/api/auth', authRoutes);
app.use('/api/crops', cropRoutes);

const startServer = async () => {
  await testConnection();

  app.listen(PORT, () => {
    console.log(`FarmEase server listening on port ${PORT}`);
  });
};

startServer().catch((err) => {
  console.error('Fatal error while starting server:', err);
  process.exit(1);
});

module.exports = app;

