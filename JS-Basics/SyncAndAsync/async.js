const fs = require('fs');

function getDirLists(error, data) {
    console.log('data: ', data);
}

fs.readdir('./', getDirLists);

console.log("Hellooooo!");