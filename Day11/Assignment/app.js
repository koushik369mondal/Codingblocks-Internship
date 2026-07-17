const express = require('express');

const app = express();
const PORT = 8001;

const userRouter = require('./routes/user.routes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// User Routes
app.use('/api/users', userRouter);

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})
