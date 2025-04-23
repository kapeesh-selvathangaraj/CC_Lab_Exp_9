const express = require('express');
const router = express.Router();
const SensorData = require('../models/SensorData');

router.post('/', async (req, res) => {
  try {
    const newData = new SensorData(req.body);
    await newData.save();
    res.status(201).send('Sensor data saved');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

router.get('/', async (req, res) => {
  const data = await SensorData.find().sort({ timestamp: -1 }).limit(50);
  res.send(data);
});

module.exports = router;
