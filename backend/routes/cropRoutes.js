const express = require('express');

const {
  createCrop,
  getCrops,
  getCropById,
  updateCrop,
  deleteCrop,
} = require('../models/cropModel');

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const crops = await getCrops();
    res.json(crops);
  } catch (error) {
    console.error('Failed to fetch crops:', error);
    res.status(500).json({ message: 'Unable to fetch crops.' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const crop = await getCropById(req.params.id);
    if (!crop) {
      return res.status(404).json({ message: 'Crop not found.' });
    }
    res.json(crop);
  } catch (error) {
    console.error('Failed to fetch crop:', error);
    res.status(500).json({ message: 'Unable to fetch crop.' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { userId, name, description, quantity, pricePerKg, status } = req.body;
    if (!userId || !name) {
      return res.status(400).json({ message: 'userId and name are required.' });
    }

    const crop = await createCrop({ userId, name, description, quantity, pricePerKg, status });
    res.status(201).json(crop);
  } catch (error) {
    console.error('Failed to create crop:', error);
    res.status(500).json({ message: 'Unable to create crop.' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const crop = await updateCrop(req.params.id, req.body);
    if (!crop) {
      return res.status(404).json({ message: 'Crop not found.' });
    }
    res.json(crop);
  } catch (error) {
    console.error('Failed to update crop:', error);
    res.status(500).json({ message: 'Unable to update crop.' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await deleteCrop(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error('Failed to delete crop:', error);
    res.status(500).json({ message: 'Unable to delete crop.' });
  }
});

module.exports = router;

