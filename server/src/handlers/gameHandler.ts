import { Server, Socket } from "socket.io";
import Game from "../game/Game";
import Player from "../game/Player";
import { CreateGamePayload } from "../messages/CreateGamePayload";
import { JoinGamePayload } from "../messages/JoinGamePayload";
import { LobbyManager } from "../game/LobbyManager";
import { GameManager } from "../game/GameManager";

module.exports = (io: Server, socket: Socket) => {
    const lobbyManager = LobbyManager.getInstance();
    const gameManager = GameManager.getInstance();

    const requestLobbyList = () => {
        socket.emit('update-lobby', lobbyManager.gameList);
    } 
    
    const createGame = async (payload: CreateGamePayload) => {
        console.log(`creating game for:${payload.nickName}`)
        try {
            const playerNickName = payload.nickName;    
            const player = new Player(socket.id, playerNickName, true);
            const game = new Game(player, true);
            const gameId = game.gameId;
            
            lobbyManager.addGame(game.gameName, gameId);
            gameManager.addGame(game);

            socket.join(gameId);
            io.to(gameId).emit('update-game', game);

            console.log(game);
        } catch(error) {
            console.log(error);
        }
    }

    const joinGame = async (payload: JoinGamePayload) => {
        console.log(`joining game:${payload.gameId} for:${payload.nickName}`)
        try {
            const playerNickName = payload.nickName;    
            const player = new Player(socket.id, playerNickName, true);
            const gameId = payload.gameId;

            const game = gameManager.getGame(gameId);

            game?.addPlayer(player);

            socket.join(gameId);
            io.to(gameId).emit('update-game', game);

        } catch(error) {
            console.log(error);
        }
    }

    socket.on("request-lobby-list", requestLobbyList);
    socket.on("create-game", createGame);
    socket.on("join-game", joinGame);
}



