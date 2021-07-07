import { Server, Socket } from "socket.io";
import { Request, Response } from 'express';

const app = require("express")();
const port = 3000;

const httpServer = app.listen(port, () => {
  console.log(`Server starting on http://localhost:${port}`)
});

const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"],
    credentials: true
  }
});

app.get('/', (req: Request, res: Response) => {
  res.send('This is the server with websockets!')
});

io.on('connection', (socket: Socket) => {
  console.log('Client connected');
  socket.emit('test','this is a message from the server');
});
