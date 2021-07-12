import React, { useEffect, useState } from 'react';
import styles from './GameMenu.module.css'
import { useHistory } from "react-router-dom";
import { GameListEntry } from '../utils/types';
import socket from '../socketConfig';

interface LobbyState {
  gameList: GameListEntry[];
}

interface ButtonProps {
    onClick: () => void;
}

interface GameRowProps {
    gameName: string,
    gameId: string
}

const GameMenu = () => {
    const[lobbyState, setLobbyState] = useState<LobbyState>({ gameList: [] })
  
    useEffect(() => {
        socket.emit('request-lobby-list');
    }, [])
    
    useEffect(()=>{
        socket.on('update-lobby', (payload: GameListEntry[]) => {
    
            setLobbyState({ gameList:payload });
        })
    })
    
    let history = useHistory();

    return (
        <div className = {styles.gamesContainer}>
            <GameListModal {...lobbyState}/>
            <div className = {styles.buttonContainer}>
                <CreateButton onClick = {() => history.push('/game/create')}/>
            </div>
        </div>
    );
}

const GameListModal = (props: LobbyState) => {
    return (
        <div className = {styles.gameListModal}>
            <ul>
                {props.gameList.map((element: GameListEntry) => {
                    return <GameListRow {...element} />
                })}
            </ul>
        </div>
    );
}

const GameListRow = (props: GameRowProps) => {
    return (
        <div className = {styles.gameListRow}>
            <p>{props.gameName}</p>   <JoinButton onClick = {() => console.log('Join Click')}/>
        </div>
    );
};

const CreateButton = (props: ButtonProps) => {
    return (
        <div>
            <button type = "button" onClick = {props.onClick} className = {`
                ${styles.button} 
                ${styles.createGameButton}`}>
                    Create Game
            </button>
        </div>
    );
}

const JoinButton = (props: ButtonProps) => {
    return(
        <div>
            <button type = "button" onClick = {props.onClick} className = {`
                ${styles.joinGameButton} 
                ${styles.button}`}>
                    Join Game
            </button>
        </div>
    );
}

export default GameMenu;