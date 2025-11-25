const { pool } = require('../db');

const createCrop = async ({
  userId,
  name,
  description,
  quantity,
  pricePerKg,
  status = 'available',
}) => {
  const query = `
    INSERT INTO crops (user_id, name, description, quantity, price_per_kg, status)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;
  const values = [
    userId,
    name,
    description,
    Number(quantity) || 0,
    Number(pricePerKg) || 0,
    status,
  ];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

const getCrops = async () => {
  const query = `
    SELECT c.*, u.name as farmer_name
    FROM crops c
    JOIN users u ON u.id = c.user_id
    ORDER BY c.updated_at DESC;
  `;
  const { rows } = await pool.query(query);
  return rows;
};

const getCropById = async (id) => {
  const query = 'SELECT * FROM crops WHERE id = $1 LIMIT 1;';
  const { rows } = await pool.query(query, [id]);
  return rows[0] || null;
};

const updateCrop = async (id, fields) => {
  const updates = [];
  const values = [];

  const mapField = (key) => {
    switch (key) {
      case 'name':
      case 'description':
      case 'quantity':
      case 'status':
        return key;
      case 'pricePerKg':
      case 'price_per_kg':
        return 'price_per_kg';
      default:
        return null;
    }
  };

  Object.entries(fields || {}).forEach(([key, value]) => {
    const column = mapField(key);
    if (column !== null && value !== undefined) {
      updates.push(`${column} = $${updates.length + 1}`);
      if (column === 'price_per_kg' || column === 'quantity') {
        values.push(Number(value));
      } else {
        values.push(value);
      }
    }
  });

  if (!updates.length) {
    return getCropById(id);
  }

  values.push(id);
  const query = `UPDATE crops SET ${updates.join(', ')}, updated_at = NOW() WHERE id = $${
    updates.length + 1
  } RETURNING *;`;

  const { rows } = await pool.query(query, values);
  return rows[0];
};

const deleteCrop = async (id) => {
  await pool.query('DELETE FROM crops WHERE id = $1;', [id]);
  return { id };
};

module.exports = {
  createCrop,
  getCrops,
  getCropById,
  updateCrop,
  deleteCrop,
};

