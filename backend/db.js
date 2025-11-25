const { Pool } = require('pg');

const connectionString =
  process.env.DATABASE_URL ||
  'postgresql://postgres:postgres@localhost:5432/farmease';

const pool = new Pool({
  connectionString,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

const testConnection = async () => {
  try {
    await pool.query('SELECT NOW()');
    console.log('Connected to PostgreSQL successfully');
  } catch (error) {
    console.error('Unable to connect to PostgreSQL:', error);
    throw error;
  }
};

module.exports = {
  pool,
  testConnection,
};

