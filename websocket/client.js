const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    ws.send('The message from client.');
});
ws.on('message', (message) => {
    console.log('Received: %s', message);
})