import { Server } from 'socket.io';
import express from 'express';
import { createServer } from 'http';

const app = express(); 
const server = createServer(app); 
const io = new Server(server);

app.get('/', function(req, res) {
    res.send('Hello world!');
});

server.listen(8080, function() {
    console.log('listening on port 8080');
});