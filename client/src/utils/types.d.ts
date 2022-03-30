export interface Quote {
    id: string;
    content: string;
    author: string;
    length: number;
}

export interface GameListEntry {
    gameName: string;
    gameId: string;
}

export interface Player {
    nickName: string;
}
