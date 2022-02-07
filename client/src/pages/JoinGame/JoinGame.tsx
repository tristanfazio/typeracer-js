import { SyntheticEvent, useState } from "react";
import socket from "../../sockets/socketConfig";
import styles from './JoinGame.module.css'
import { useLocation } from 'react-router-dom';

interface LocationState {
    gameId: string
 }

const JoinGame = () => {
    const [nickName, setnickName] = useState("");
    const { state } = useLocation<LocationState>();
    console.log(state);
    var gameId = state.gameId;

    const handleSubmit = (event: SyntheticEvent): void => {
        event.preventDefault();
        socket.emit('join-game', {nickName: nickName, gameId: gameId})
    }

    return(
        <div>
            <div className = {styles.createModal}>
                <h2>Join Game</h2>
                <form className={styles.createForm} onSubmit={handleSubmit}>
                    <label>
                        <h3>Enter a Nickname:</h3>
                    </label>
                    <input type="text" name="nickName" onChange={e => setnickName(e.target.value)} />
                </form>
            </div>
            <div className = {styles.buttonContainer}>
                <button type = "button" onClick = {handleSubmit} className = {`
                    ${styles.button} 
                    ${styles.joinGameButton}`}>
                        Join Game
                </button>
            </div>
        </div>
    );
}

export default JoinGame;