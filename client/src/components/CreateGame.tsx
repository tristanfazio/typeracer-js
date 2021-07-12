import React, { SyntheticEvent, useState } from "react";
import socket from "../socketConfig";
import styles from './CreateGame.module.css'

const CreateGame = () => {
    const [nickName, setnickName] = useState("");

    const handleSubmit = (event: SyntheticEvent): void => {
        event.preventDefault();
        socket.emit('create-game', {nickName: nickName})
    }

    return(
        <div>
            <div className = {styles.createModal}>
                <h2>Create Game</h2>
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
                    ${styles.createGameButton}`}>
                        Create Game
                </button>
            </div>
        </div>
    );
}

export default CreateGame;