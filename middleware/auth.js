'use strict';

const jwt = require('jsonwebtoken');

// Middleware for checking JWT and admin role
module.exports = function(req, res, next) {
    // Check token existence
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (!token) {
        return res.status(403).json({ message: 'No token provided!' });
    }

    // Verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized!' });
        }

        // Check for admin role
        if (decoded.role !== 'admin') {
            return res.status(403).json({ message: 'Requires admin role!' });
        }

        // If everything is good, proceed to the next middleware
        req.userId = decoded.id;
        next();
    });
};
