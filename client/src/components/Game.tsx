import { useState } from "react";
import { Player } from "../utils/types";

interface GameState {
    gameId: string,
    players: Player[]
}

function Game() {
    const[gameState, setGameState] = useState<GameState>();

    return(
        <div>
            BOOP!
        </div>
    );
}

export default Game;