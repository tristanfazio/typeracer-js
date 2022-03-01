// import { useGameStateSelector } from "../state/hooks";
import { GameState } from '../state/gameState/gameStateReducer';
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
        </div>
    );
};

export default PlayerContainer;

interface PlayerProps {
    playerName: string;
    bgColour: string;
    progress: number;
}

const PlayerElement = (props: PlayerProps) => {
    const { bgColour, progress, playerName } = props;

    return (
        <div className={styles.playerElement}>
            <div>{playerName}</div>
            <ProgressBar bgColour={bgColour} progress={progress} />
        </div>
    );
};

interface ProgressBarProps {
    bgColour: string;
    progress: number;
}

const ProgressBar = (props: ProgressBarProps) => {
    const { bgColour, progress } = props;

    return (
        <div className={styles.progressBarBackground}>
            <div
                className={styles.progressBarFiller}
                style={{ backgroundColor: bgColour, width: `${progress}%` }}
            >
                <span className={styles.progressBarLabel}>
                    {`${progress}%`}
                </span>
            </div>
        </div>
    );
};
