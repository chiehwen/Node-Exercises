const WebSocket = require('ws');

const wss = new WebSocket.Server({
  perMessageDeflate: false,
  port: 8080
});

wss.on('connection', (ws) => {
  console.log('WebSocket connection has been established.')
  // Receive message from client
  ws.on('message', (message) => {
    console.log('Received: %s', message);
  });

  // Send message to client
  ws.send('The message from server.');
});