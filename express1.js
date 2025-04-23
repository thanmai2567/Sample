const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Sample user data
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes

// Show users in table via EJS
app.get('/users', (req, res) => {
  res.render('users', { users });
});

// API - Get all users
app.get('/api/users', (req, res) => {
  res.json(users);
});

// API - Create user
app.post('/api/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// API - Update user
app.put('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// API - Delete user
app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(u => u.id !== id);
  res.status(204).send();
});

// Start server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
