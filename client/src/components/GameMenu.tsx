import { useEffect, useReducer } from 'react';
import styles from './GameMenu.module.css'
import { useHistory } from "react-router-dom";
import { GameListEntry } from '../types';
import socket from '../sockets/socketConfig';
import lobbyListReducer, { initialState } from '../state/lobbyList/lobbyListReducer';
import { registerUpdateLobbyListener } from '../sockets/lobbyListSockets';
import { useLobbyListSelector } from '../state/hooks';
interface ButtonProps {
    onClick: () => void;
}

interface GameRowProps {
    gameName: string,
    gameId: string
}

const GameMenu = () => {
    const lobbyState = useLobbyListSelector((state) => state.lobbyList.gameList);
    
    let history = useHistory();

    useEffect(() => {
        registerUpdateLobbyListener();
        socket.emit('request-lobby-list');
    }, [])

    return (
        <div className = {styles.gamesContainer}>
            <GameListModal gameList = { lobbyState }/>
            <div className = {styles.buttonContainer}>
                <CreateButton onClick = {() => history.push('/game/create')}/>
            </div>
        </div>
    );
}

const GameListModal = (props: {gameList: GameListEntry[]}) => {
    return (
        <div className = {styles.gameListModal}>
            <ul>
                { props.gameList.map((element: GameListEntry) => {
                    return <GameListRow {...element} />
                }) } 
            </ul>
        </div>
    );
}

const GameListRow = (props: GameRowProps) => {
    let history = useHistory();

    return (
        <div className = {styles.gameListRow}>
            <p>{props.gameName}</p>   <JoinButton onClick = {() => history.push({
                pathname:`/game/join`,
                state: {gameId: props.gameId}
                })
            }/>
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