import { Socket } from "socket.io";

interface GameListEntry {
    gameName: string,
    gameId: string
}

export class LobbyManager {
    private static instance: LobbyManager;
    gameList:GameListEntry[] = [];

    constructor() {}

    public static getInstance(): LobbyManager {
        if(!LobbyManager.instance) {
            LobbyManager.instance = new LobbyManager();
        }

        return LobbyManager.instance;
    }

    addGame(gameName: string, gameId: string) {
        const gameListEntry: GameListEntry = { gameName: gameName, gameId: gameId }; 
        this.gameList.push(gameListEntry)
    }
}
