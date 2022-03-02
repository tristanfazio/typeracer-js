import PlayerElement  from '../PlayerElement';
import { GameState } from '../../state/gameState/gameStateReducer';
import styles from './PlayerContainer.module.css';

const PlayerContainer = (props: { gameState: GameState }) => {
    const gameState = props.gameState;

    return (
        <div className={styles.playerContainer}>
            {gameState.playerList.map((player) => {
                return (
                    <PlayerElement
                        playerName={player.playerName}
                        bgColour='#06D6A0'
                        progress={player.progress}
                    />
                );
            })}
            <div className = { styles.statsContainer }>
                <span>WPM: 30</span>
                <span>59s</span>
            </div>
        </div>
    );
};

export default PlayerContainer;
