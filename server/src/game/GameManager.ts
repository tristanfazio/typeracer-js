import { Server, Socket } from "socket.io";
import Game from "./Game";

export class GameManager {
    private static instance: GameManager;
    private io: Server | undefined;
    private games = new Map<string, Game>();

    constructor() {}

    public static getInstance(): GameManager {
        if(!GameManager.instance) {
            GameManager.instance = new GameManager();
        }

        return GameManager.instance;
    }

    attachServer(io: Server) {
        this.io = io;
    }

    addGame(game: Game) {
        this.games.set(game.gameId,game);
    }

    getGame(gameId: string) {
        return this.games.get(gameId);
    }
}
