const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/register', UserController.registerUser);
router.get('/list', UserController.getRegisteredUsers);
// Add other user routes as needed

module.exports = router;
