import React from "react";
import styles from './GameMenu.module.css'
import { useHistory } from "react-router-dom";

const GameMenu = () => {
    let history = useHistory();
    return(
        <div className = {styles.gamesContainer}>
            <div className = {styles.gameList}></div>
            <div className = {styles.buttonContainer}>
                <button type = "button" onClick = {()=> history.push('/game/create')} className = {`
                    ${styles.button} 
                    ${styles.createGameButton}`}>
                        Create Game
                </button>
                <button type="button" className = {`
                    ${styles.joinGameButton} 
                    ${styles.button}`}>
                        Join Game
                </button>
            </div>
        </div>
    );
} 
export default GameMenu;