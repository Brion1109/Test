const jwt = require('jsonwebtoken');

exports.authenticateAdmin = (req, res, next) => {
  // Check if token is present in request headers
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded.admin;
    next();
  } catch (error) {
    console.error('Error authenticating admin:', error);
    return res.status(401).json({ error: 'Unauthorized' });
  }
};