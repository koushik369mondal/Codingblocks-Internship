const express = require('express');

const app = express();

app.get('/', (req, res)=> {
    res.send('Hello World');
})

app.get('/html', (req, res)=> {
    res.sendFile('D:\\College\\Codingblocks-Internship\\index.html')
})



app.listen(7001, ()=> {
    console.log('Server started');
})