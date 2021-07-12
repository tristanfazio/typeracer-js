import { Server, Socket } from "socket.io";
import Game from "../game/Game";
import Player from "../game/Player";
import { CreateGamePayload } from "../messages/CreateGamePayload";
import { LobbyManager } from "../game/LobbyManager";

module.exports = (io: Server, socket: Socket) => {
    const lobbyManager = LobbyManager.getInstance();
    
    const requestLobbyList = () => {
        socket.emit('update-lobby', lobbyManager.gameList);
    } 
    
    const createGame = (payload: CreateGamePayload) => {
        const playerNickName = payload.nickName;    
        console.log(payload);
        const player = new Player(socket.id, playerNickName, true);
        const game = new Game(player, true);
        lobbyManager.addGame(game.gameName, game.gameId);
        socket.broadcast.emit('update-lobby', lobbyManager.gameList);
    }

    socket.on("request-lobby-list", requestLobbyList);
    socket.on("create-game", createGame);
}



