const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // Parse JSON data sent to the server

app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Here, you can process the data, e.g., save to a database, send an email, etc.
    console.log(`Received form submission: Name: ${name}, Email: ${email}, Message: ${message}`);

    // Send a response back to the client
    res.status(200).json({ message: 'Form submitted successfully!' });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
