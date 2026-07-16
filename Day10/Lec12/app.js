const express = require('express');
const fs = require('fs');

const app = express();

const PORT = 8001;

const users = require('./MOCK_DATA.json');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get all user data
app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/api/users', (req, res) => {
    res.send(users);
});

// get particular data
// http://localhost:8001/api/users/12
app.get('/api/users/:id', (req, res) => {
    const id = req.params.id;

    console.log(typeof (id));

    const user = users.filter((item) => item.id == id);

    console.log(user);

    return res.json(user);
});

// http://localhost:8001/api/users/multiple/12,14,15
app.get('/api/users/multiple/:ids', (req, res) => {

    const idArray = req.params.ids.split(',').map(Number);

    const matchedUsers = users.filter(item => idArray.includes(Number(item.id)));

    console.log(matchedUsers);
    return res.json(matchedUsers);
});

app.post('/api/users', (req, res) => {
    const body = req.body;

    console.log(body);

    users.push({ id: users.length + 1, ...body });

    fs.writeFile(
        './MOCK_DATA.json',
        JSON.stringify(users, null, 2),
        (err) => {
            if (err) {
                return res.status(500).json({ status: "Failed" });
            }

            return res.json({ status: "Successful" });
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});