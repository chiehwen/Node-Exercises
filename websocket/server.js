const WebSocket = require('ws');

const wss = new WebSocket.Server({
  perMessageDeflate: false,
  port: 8080
});

wss.on('connection', (ws) => {

  // Recieves the message from client
  ws.on('message', (message) => {
    console.log('Received: %s', message);
  });
  ws.send('The message from server.');
});