import { useState } from "react";
import { Player } from "../types";
import styles from './Game.module.css'


interface GameState {
    gameId: string,
    players: Player[]
}

function Game() {
    const[gameState, setGameState] = useState<GameState>();

    return(
        <div className = {styles.gamePage}>
            <div className = {styles.playerContainer}>
                player container
            </div>
            <div className = {styles.quoteContainer}>
                quote container
            </div>
        </div>
    );
}

export default Game;