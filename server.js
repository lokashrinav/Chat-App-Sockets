const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let messageHistory = []

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('A user connected');

    messageHistory.forEach((elem) => {
        socket.emit('chat message', elem);
    } )

    socket.on('chat message', function(msg) {
        messageHistory.push(msg);
        io.emit('chat message', msg); 
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
