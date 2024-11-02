// server.js
require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 4000;

const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

app.use(cors({
  origin: '*',
  credentials: true,
}));

app.get('/', (req, res) => {
  res.send(`Host: ${req.headers.host} Port:${PORT}`);
});

io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('submitPatientData', (data) => {
    io.emit('patientFormUpdate', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Socket.IO server running`);
});

