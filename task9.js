const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/userdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true  // Add this to prevent deprecation warnings
}).then(() => {
    console.log('✅ Connected to MongoDB');
}).catch((err) => {
    console.error('❌ MongoDB connection error:', err);
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model('User', userSchema);

// API Routes

// CREATE
app.post('/api/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// READ ALL (API)
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE
app.put('/api/users/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ message: 'User not found' });
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE
app.delete('/api/users/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ ALL (EJS View)
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        if (!users || users.length === 0) {
            console.log("No users found in the database.");
        }
        res.render('users', { users });
    } catch (err) {
        console.error("Error loading users:", err);
        res.status(500).send('Error loading users');
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
