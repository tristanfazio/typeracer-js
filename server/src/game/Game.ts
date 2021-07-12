import Player from "./Player";
import {v4 as uuidv4} from 'uuid';

class Game {
    readonly gameName: string;
    readonly gameId: string;
    players: Player[] = [];
    isOpen: boolean;
    isOver: boolean = false;

    constructor(player: Player, isOpen: boolean) {
        this.gameName = player.nickName !== undefined ? player.nickName : 'anonymous';
        this.gameName = this.gameName + '\'s race';
        this.gameId = uuidv4();
        this.isOpen = isOpen;
        this.players.push(player);
    }
}

export default Game;