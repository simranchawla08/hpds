const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  start: { type: Date, required: true },
  end: { type: Date, required: true },
});

module.exports = mongoose.model('Booking', bookingSchema);
