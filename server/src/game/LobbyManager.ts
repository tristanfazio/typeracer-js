import { Server, Socket } from "socket.io";

interface GameListEntry {
    gameName: string,
    gameId: string
}

export class LobbyManager {
    private static instance: LobbyManager;
    private io: Server | undefined;
    gameList:GameListEntry[] = [];

    constructor() {}

    public static getInstance(): LobbyManager {
        if(!LobbyManager.instance) {
            LobbyManager.instance = new LobbyManager();
        }

        return LobbyManager.instance;
    }

    attachServer(io: Server) {
        this.io = io;
    }

    addGame(gameName: string, gameId: string) {
        const gameListEntry: GameListEntry = { gameName: gameName, gameId: gameId }; 
        this.gameList.push(gameListEntry)

        this.broadcastLobbyList();
    }

    broadcastLobbyList() {
        if(!this.io) return
        this.io.of("/").emit('update-lobby', this.gameList);
    }
}
