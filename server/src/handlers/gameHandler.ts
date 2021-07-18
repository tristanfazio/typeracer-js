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
    
    const createGame = async (payload: CreateGamePayload) => {
        console.log(`creating game for:${payload.nickName}`)
        try {
            const playerNickName = payload.nickName;    
            const player = new Player(socket.id, playerNickName, true);
            const game = new Game(player, true);
            lobbyManager.addGame(game.gameName, game.gameId);

            const gameId = game.gameId;
            socket.join(gameId);
            io.to(gameId).emit('update-game', game);

            console.log(game);
        } catch(error) {
            console.log(error);
        }
    }

    socket.on("request-lobby-list", requestLobbyList);
    socket.on("create-game", createGame);
}



