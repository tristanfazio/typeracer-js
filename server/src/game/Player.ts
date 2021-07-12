class Player {
    readonly socketId: string;
    readonly nickName: string;
    readonly isLobbyLeader: boolean;
    
    constructor(socketId: string, nickName: string, isLobbyLeader: boolean) {
        this.socketId = socketId;
        this.nickName = nickName.trim();
        this.isLobbyLeader = isLobbyLeader;
    }
}

export default Player;