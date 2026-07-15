const http = require('http');

//create server
const myserver = http.createServer((req, res) => {
    console.log("Hello")
    res.end('hello student');
})


// server listen port
myserver.listen(7000, () => {
    console.log("Server started")
})