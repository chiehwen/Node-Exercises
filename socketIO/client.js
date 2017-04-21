const socket = require('socket.io-client')('http://localhost:8080');

socket.on('server', (message) => {
    console.log('WebSocket connection has been established.');
    console.log('Received: %j', message);
    
    // Send message to WebSocket server
    socket.emit('client', { message: 'The message from client.' });

    // Connot connect to server
    socket.on('disconnect', () => {
        console.log('WARN: LOSS of SERVER CONNECTION.');
    })
});