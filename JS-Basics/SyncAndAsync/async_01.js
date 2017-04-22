const fs = require('fs');

fs.readdir('./', (error, data) => {
    console.log('data: ', data);
});

console.log("Hellooooo!");