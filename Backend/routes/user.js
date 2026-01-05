const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST create user
router.post('/', async (req, res) => {
  try {
    const { username, password, isActive, permittedSections, entryBy, entryDate } = req.body;
    const newUser = new User({ username, password, isActive, permittedSections, entryBy, entryDate });
    await newUser.save();
    res.json({ message: 'User created successfully', newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE user by id
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;