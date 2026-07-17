const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

let users = require("../MOCK_DATA.json");

const filePath = path.join(__dirname, "../MOCK_DATA.json");

// GET All Users
// GET http://localhost:7001/api/users
router.get("/", (req, res) => {
    return res.json(users);
});

// GET User By ID
// GET http://localhost:7001/api/users/1
router.get("/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users.find((item) => item.id === id);

    if (!user) {
        return res.status(404).json({
            status: "User Not Found",
        });
    }

    return res.json(user);
});

// Add New User
// POST http://localhost:7001/api/users
router.post("/", (req, res) => {
    const body = req.body;

    const newUser = {
        id: users.length + 1,
        ...body,
    };

    users.push(newUser);

    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
            });
        }

        return res.status(201).json({
            status: "User Added Successfully",
            user: newUser,
        });
    });
});

// Update Specific Fields
// PATCH http://localhost:7001/api/users/1
router.patch("/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users.find((item) => item.id === id);

    if (!user) {
        return res.status(404).json({
            status: "User Not Found",
        });
    }

    Object.assign(user, req.body);

    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
            });
        }

        return res.json({
            status: "User Updated Successfully",
            user,
        });
    });
});

// Replace Entire User
// PUT http://localhost:7001/api/users/1
router.put("/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = users.findIndex((item) => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            status: "User Not Found",
        });
    }

    users[index] = {
        id,
        ...req.body,
    };

    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
            });
        }

        return res.json({
            status: "User Replaced Successfully",
            user: users[index],
        });
    });
});

// Delete User
// DELETE http://localhost:7001/api/users/1
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    const user = users.find((item) => item.id === id);

    if (!user) {
        return res.status(404).json({
            status: "User Not Found",
        });
    }

    users = users.filter((item) => item.id !== id);

    fs.writeFile(filePath, JSON.stringify(users, null, 2), (err) => {
        if (err) {
            return res.status(500).json({
                status: "Failed",
            });
        }

        return res.json({
            status: "User Deleted Successfully",
        });
    });
});

module.exports = router;