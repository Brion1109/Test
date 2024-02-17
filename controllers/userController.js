const User = require('../models/User');

exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber } = req.body;
    const newUser = new User({ firstName, lastName, phoneNumber });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getRegisteredUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// Implement other CRUD operations as needed
