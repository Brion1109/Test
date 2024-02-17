// backend/routes/admin.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET route to retrieve user information for admin
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, 'firstName lastName telephoneNumber');
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
