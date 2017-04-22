const fs = require('fs');

let users1 = {
    username: "chiehwen"
}

fs.writeFileSync('./users1.json', users1);

let users2 = '{ "username": "chiehwen" }'

fs.writeFileSync('./users2.json', users2);

let users3 = { username: "chiehwen" }

fs.writeFileSync('./users3.json', JSON.stringify(users3));