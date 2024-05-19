const mongoose = require('mongoose');

const availabilitySchema = new mongoose.Schema({
  start: { type: Date, required: true },
  end: { type: Date, required: true },
});

module.exports = mongoose.model('Availability', availabilitySchema);
