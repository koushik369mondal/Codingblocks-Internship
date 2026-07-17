const express = require("express");

const app = express();
const PORT = 7001;

const userRouter = require("./routes/user.route");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// User Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
    console.log(`Server Started on Port ${PORT}`);
});