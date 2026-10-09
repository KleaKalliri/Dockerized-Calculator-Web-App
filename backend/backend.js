const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Middleware to set CORS headers
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next(); // Proceed to the next middleware or route handler
});

// Route to handle addition
app.post('/add', (req, res) => {
    const { num1, num2 } = req.body;
    res.json({ result: num1 + num2 });
});

// Route to handle subtraction
app.post('/subtract', (req, res) => {
    const { num1, num2 } = req.body;
    res.json({ result: num1 - num2 });
});

// Route to handle multiplication
app.post('/multiply', (req, res) => {
    const { num1, num2 } = req.body;
    res.json({ result: num1 * num2 });
});

// Route to handle division
app.post('/divide', (req, res) => {
    const { num1, num2 } = req.body;
    if (num2 === 0) {
        res.status(400).json({ error: 'Division by zero is not allowed.' });
    } else {
        res.json({ result: num1 / num2 });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Backend microservice running on http://localhost:${port}`);
});
