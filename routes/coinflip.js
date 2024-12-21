const express = require('express');
const router = express.Router();

// Coin flip logic
router.get('/', (req, res) => {
    // Randomly choose heads or tails
    const outcome = Math.random() < 0.5 ? 'heads' : 'tails';

    // Respond with the outcome of the coin flip
    res.json({ message: `The coin landed on ${outcome}.` });
});

module.exports = router;
