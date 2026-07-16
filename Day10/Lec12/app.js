const express = require('express');

const app = express();

const PORT = 8001;

const users = require('./MOCK_DATA.json');

// get all user data
app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/api/users', (req, res) => {
    res.send(users)
})

// get particular data
app.get('/api/users/:id', (req,res) => {
    const id = req.params.id;

    console.log(typeof(id))

    const user = users.filter((item) => item.id == id);

    console.log(user);

    return res.json(user)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Note: The instructor is currently typing the console.log statement here
});