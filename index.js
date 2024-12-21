const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Import routes
const coinflipRoute = require('./routes/coinflip');

// Middleware
app.use(express.json());

// Routes
app.use('/api/coinflip', coinflipRoute);

// Root endpoint
app.get('/', (req, res) => {
    res.send("Welcome to the Coin Flip API! Use /api/coinflip to flip the coin.");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
