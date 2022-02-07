import { useState } from "react";
import { Player } from "../../types";
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
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum urna eu vehicula eleifend. Morbi pretium sem libero, nec vehicula arcu accumsan vitae. Aenean quis lacus eget sem maximus tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae urna vitae risus varius porttitor id luctus massa. Praesent tincidunt nibh a nunc pretium, id aliquet leo eleifend. Sed nunc dolor, varius et sapien egestas, pretium interdum arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sed nibh vel turpis volutpat bibendum a et ante. Suspendisse mattis nisi ac sollicitudin lobortis.
                </p>
            </div>
        </div>
    );
}

export default Game;