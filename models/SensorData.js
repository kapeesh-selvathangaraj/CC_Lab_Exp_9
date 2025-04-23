const mongoose = require('mongoose');

const sensorDataSchema = new mongoose.Schema({
  x: Number,
  y: Number,
  z: Number,
  lat: Number,
  lon: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SensorData', sensorDataSchema);
