const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:8080');

// Send message to WebSocket server
ws.on('open', () => {
    console.log('WebSocket connection has been established.')
    ws.send('The message from client.');
});

// Receive message from WebSocket server
ws.on('message', (message) => {
    console.log('Received: %s', message);
})