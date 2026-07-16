const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8001;

let users = require("../Lec12/MOCK_DATA.json");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// HOME
// http://localhost:8001/
app.get('/', (req, res)=>{
    res.send(`Server running on port ${PORT}`)
})

// GET All Users
// http://localhost:8001/api/users/
app.get('/api/users', (req, res) => {
    return res.json(users);
})

// GET User By Id
// http://localhost:8001/api/user/1
app.get('/api/user/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((item) => item.id === id);
    if(!user){
        return res.status(404).json({
            status: "User Not Found",
        });
    }
    return res.json(user);
})

// Add New User (POST)
app.post('/api/users', (req, res) => {
    const body = req.body;
    const newUser = {
        id: users.length+1,
        ...body,
    };
    users.push(newUser);
    fs.writeFile(
        '../Lec12/MOCK_DATA.json',
        JSON.stringify(users, null, 2),
        (err) => {
            if(err){
                return res.status(500).json({
                    status: "Failed",
                });
            }
            return res.status(201).json({
                status: "User Added",
                user:  newUser,
            });
        }
    );
});


app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})