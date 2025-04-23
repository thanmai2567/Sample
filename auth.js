const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();

app.use(express.json());

const JWT_SECRET = 'My_sceret_key'; // Use environment variable in production

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/auth_demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Public route - login and get token
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    const user = await User.findOne({ username, password }); // In real apps, hash passwords!
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// Middleware to check token
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};

// Protected route
app.get('/protected', authenticate, (req, res) => {
    res.json({ message: 'You have accessed a protected route!', user: req.user });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
