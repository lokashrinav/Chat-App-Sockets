const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let messageHistory = []

// Serve static files from the "public" directory
app.use(express.static('public'));

// Listen for client connections
io.on('connection', (socket) => {
    console.log('A user connected');

    messageHistory.forEach((elem) => {
        socket.emit('chat message', msg);
    } )

    socket.on('chat message', function(msg) {
        messageHistory.appendChild(item);
    });

    // Handle user disconnect
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start the server on all network interfaces
const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
