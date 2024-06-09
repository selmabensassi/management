import { io } from 'socket.io-client';

const SOCKET_URL = 'ws://localhost:8000'; 

const socket = io(SOCKET_URL, {
  transports: ['websocket'],
  upgrade: false,
});

socket.on('connect', () => {
  console.log('Connected to Socket.IO server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from Socket.IO server');
});

export default socket;
