// backend/server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/event-registration', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once('open', () => console.log('Connected to MongoDB'));
db.on('error', (err) => console.error('MongoDB connection error:', err));

// Define routes
app.use('/api/register', require('./routes/register'));
app.use('/api/users', require('./routes/users'));
app.use('/api/admin', require('./routes/admin'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
