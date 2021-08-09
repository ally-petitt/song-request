import { Server } from 'socket.io';
import express from 'express';
import cors from "cors"
import { createServer } from 'http';
import * as ioFunctions from "./io-functions/chat.js"

const app = express(); 
const server = createServer(app); 
const io = new Server(server);

// apply middleware
app.use(cors({ origin: "http://localhost:3000"}))

app.get('/', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.send('Hello world!');
});

server.listen(8080, function() {
    console.log('listening on port 8080');
});

// whenever someone connects, this function gets excecuted
// io.on("connection", ioFunctions.connect)
io.on("connection", (socket) => {
    console.log("user connected")

    socket.on("disconnect", () => {
        console.log("disconnected")
    })
})