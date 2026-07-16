const express = require('express');

const app = express();

const PORT = 4444;

app.get('/', (req, res) => {
    res.send('hello students');
});

// query
app.get('/name', (req, res) => {
    // res.send('Hello Kaushik')
    console.log(req.query);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Note: The instructor is currently typing the console.log statement here
});