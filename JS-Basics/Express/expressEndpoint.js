const express = require('express');
const app = express();

app.use('/api', (req, res) => {
    console.log('The API has been requested by a client.');
    res.send('This is an API endpoint.');
});

app.listen(8000);