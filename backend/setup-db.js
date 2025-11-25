/**
 * Database Setup Script
 * Run this once to create the database tables
 * 
 * Usage: node setup-db.js
 */

require('dotenv').config();
const { pool } = require('./db');
const fs = require('fs');
const path = require('path');

async function setupDatabase() {
  try {
    console.log('🔄 Connecting to database...');
    await pool.query('SELECT NOW()');
    console.log('✅ Database connection successful!');

    console.log('🔄 Reading migration file...');
    const migrationPath = path.join(__dirname, 'migrations', '001_create_tables.sql');
    const sql = fs.readFileSync(migrationPath, 'utf8');

    console.log('🔄 Creating tables...');
    await pool.query(sql);
    console.log('✅ Tables created successfully!');

    console.log('\n🎉 Database setup complete!');
    console.log('You can now start the server with: npm run dev\n');
  } catch (error) {
    console.error('❌ Error setting up database:', error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

setupDatabase();

