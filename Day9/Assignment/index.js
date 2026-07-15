const fs = require('fs');

// WRITE
fs.writeFileSync('temp.txt', 'Hello World');
console.log('File Create');

// READ
// const data = fs.readFileSync('temp.txt', 'utf8');
// console.log('File content: ', data);

// UPDATE
// fs.appendFileSync('temp.txt', '\nNew Data Added.');
// console.log('File Updated.');

// DELETE
// fs.unlinkSync('temp.txt');
// console.log('File Deleted');


