import { Server, Socket } from "socket.io";
import { createServer } from "http";
import { LobbyManager } from "./game/LobbyManager";

const port = 3000;
const hostname = 'localhost'

const httpServer = createServer();
httpServer.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const io = new Server(httpServer, {
  cors: {
    origin: `http://${hostname}:8080`,
    methods: ["GET", "POST"],
    credentials: true
  }
});

const registerGameHandlers = require("./handlers/gameHandler");
const initLobbyManager = LobbyManager.getInstance();
initLobbyManager.attachServer(io);

const onConnection = (socket: Socket) => {
  registerGameHandlers(io, socket);
}

io.on('connection', onConnection);