// backend/routes/register.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST route to register a new user
router.post('/', async (req, res) => {
  try {
    const { firstName, lastName, telephoneNumber } = req.body;
    const newUser = new User({ firstName, lastName, telephoneNumber });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
