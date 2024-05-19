const express = require('express');
const router = express.Router();
const Availability = require('../models/availability');

router.get('/', async (req, res) => {
  const availabilities = await Availability.find();
  res.json(availabilities);
});

router.post('/', async (req, res) => {
  const availability = new Availability(req.body);
  await availability.save();
  res.json(availability);
});

module.exports = router;
