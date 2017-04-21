const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

http.listen(8080, '0.0.0.0', () => {
    console.log('Listening on *:8080');
});

// Set socket.io listeners.
io.on('connection', (socket) => {
    console.log('WebSocket connection has been established.');
    console.log('Socket: ', socket.id)

    // Receive message from client
    socket.on('client', (message) => {
        console.log('Received: %j', message);
    })

    // Send message to client
    socket.emit('server', { message: 'The message from server.' });

    // When client disconnect
    socket.on('disconnect', () => {
        console.log('WARN: THE CLIENT ' + socket.id + ' DISCONNECTED.');
    })
});