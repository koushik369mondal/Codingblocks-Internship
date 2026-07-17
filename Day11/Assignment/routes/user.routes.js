const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

let filePath = path.join(__dirname,'../students.json'); 
let users = require('../students.json');

// GET all
router.get('/', (req, res) => {
    return res.json(users);
});

// GET Particular
router.get('/:id', (req, res) =>{
    const id = req.params.id;
    console.log(typeof(id));
    const user = users.filter((item) => item.id === id);
    console.log(user);
    return res.json(user);
})

// POST
router.post('/', (req, res) => {
    const body = req.body; // extract data from body
    console.log(body);
    users.push({
        id: users.length + 1, ...body //expanding the body part in user using ...
    });
    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
        if(err){
            console.log("Error");
            return res.status(500).json({
                status: "Error", 
                message:"Failed to write daata"
            });
        }
        return res.json({status: "Successfull"});
    });
});

// PATCH - updated selected data
router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const body = req.body;

    // Find the user and merge the updates directly into the object
    const user = users.find(u => u.id === id);
    Object.assign(user, body);

    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
        if (err) return res.status(500).json({ status: "Error" });
        return res.json({ status: "Successfull" });
    });
});



module.exports = router;