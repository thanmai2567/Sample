// express.js
const express = require('express');
const app = express();
const port = 3000;

// Serve HTML response
app.get('/html', (req, res) => {
  res.send('<h1>This is an HTML response from Express!</h1>');
});

// Serve plain text response
app.get('/text', (req, res) => {
  res.type('text').send('This is a plain text response from Express!');
});

// Serve JSON response
app.get('/json', (req, res) => {
  res.json({ message: 'This is a JSON response from Express!' });
});

// Catch-all for unknown routes
app.use((req, res) => {
    res.status(404).send('404 Not Found');
  });
  

// Start server
app.listen(port, () => {
  console.log(`✅ Express server running at http://localhost:${port}`);
});
