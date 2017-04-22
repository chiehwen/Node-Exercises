const fs = require('fs');

const data = require('./data.json');

console.log(data);
console.log(data.username);         // => chiehwen

fs.readFile('./data.json', 'utf-8', (error, data) => {
    console.log(data);
    console.log(data.username);     // => undefined

    let data2 = JSON.parse(data);
    console.log(data2.username);    // => chiehwen
});