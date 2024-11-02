// server.js
require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

setInterval(() => {
  io.emit('patient_form_update', {
    firstName: "John",
    lastName: "Doe",
    dateOfBirth: "1990-01-01",
    gender: "Male",
    phone: "1234567890",
    email: "johndoe@example.com"
  });
}, 5000);

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 4000;

const io = socketIo(server, {
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  credentials: true,
}));

app.get('/', (req, res) => {
  res.send('Socket.IO server is running');
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('message', (msg) => {
    console.log('Message received:', msg);
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
