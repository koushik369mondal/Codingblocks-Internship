const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 8001;

let users = require("../Lec12/MOCK_DATA.json");

//  Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//  HOME
//  http://localhost:8001/
app.get('/', (req, res)=>{
    res.send(`Server running on port ${PORT}`)
})

//  GET All Users
//  http://localhost:8001/api/users/
app.get('/api/users', (req, res) => {
    return res.json(users);
})

//  GET User By Id
//  http://localhost:8001/api/user/1
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

//  Add New User (POST)
//  http://localhost:8001/api/users
//  body -> raw -> JSON
//  eg.
//  {
//      "first_name": "Hello2",
//      "last_name": "test2",
//      "email": "koushik@gmail.com",
//      "gender": "Male",
//      "ip_address": "192.168.1.10"
//  }
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

//  Update Specific Fields (PATCH)
//  http://localhost:8001/api/users/5
//  body -> raw -> JSON
//  eg.
//  {
//      "first_name": "Rahul"
//  }
app.patch('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((item) => item.id === id);
    if(!user){
        return res.status(404).json({
            status: "User Not Found",
        });
    }
    Object.assign(user, req.body);
    fs.writeFile(
        '../Lec12/MOCK_DATA.json',
        JSON.stringify(users, null, 2),
        (err) => {
            if(err) {
                return res.status(500).json({
                    status: "Failed",
                });
            }
            return res.status(200).json({ 
                status: "Updated Successfully",
                user: user,
            });
        }
    )
})

//  Replace Entire User (PUT)
//  http://localhost:8001/api/users/5
//  body -> raw -> JSON
//  eg. 
//  {
//      "first_name": "Amit",
//      "last_name": "Sharma",
//      "email": "amit@gmail.com",
//      "gender": "Male",
//      "ip_address": "10.0.0.1"
// }
app.put('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = users.findIndex((item) => item.id === id);
    if(index === -1){
        return res.status(404).json({ 
            status: "User Not Found" 
        });
    }
    users[index] = {
        id,
        ...req.body,
    };
    fs.writeFile(
        '../Lec12/MOCK_DATA.json',
        JSON.stringify(users, null, 2),
        (err) => {
            if (err){ 
                return res.status(500).json({ 
                    status: "Failed" 
                }) 
            }
            return res.json({
                status:  "User Replaced Successfully",
                user: users[index],
            });
        }
    )
})

//  Delete User
//  http://localhost:8001/api/users/6
app.delete('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((item) => item.id === id);
    if(!user){
        return res.status(404).json({
            status: "User Not Found",
        });
    }
    users = users.filter((item) => item.id !== id);
    fs.writeFile(
        '../Lec12/MOCK_DATA.json',
        JSON.stringify(users, null, 2),
        (err) => {
            if(err){
                return res.status(500).json({
                    status: "Failed",
                });
            }
            return res.json({
                status: "User Deleted Successfully",
            });
        }
    )
});



app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})