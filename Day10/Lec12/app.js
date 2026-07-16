const express = require('express');

const app = express();

const PORT = 8001;

const users = require('./MOCK_DATA.json');

app.get('/users', (req, res) => {
    res.send(users)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Note: The instructor is currently typing the console.log statement here
});