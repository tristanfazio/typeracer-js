// import { useGameStateSelector } from "../state/hooks";
import styles from './PlayerContainer.module.css'

function PlayerContainer() {
    // const gameState = useGameStateSelector((state) => state);

    return(
        <div className = {styles.playerContainer}>
            <PlayerElement playerName = "Player 1" bgColour = "#EF476F" progress = {69}/>
            <PlayerElement playerName = "Player 2" bgColour = "#06D6A0" progress = {100}/>
            <PlayerElement playerName = "Player 3" bgColour = "#118AB2" progress = {25}/>
            <PlayerElement playerName = "Player 4" bgColour = "#FFD166" progress = {0}/>
        </div>
    );
}

export default PlayerContainer;

interface PlayerProps {
    playerName: string,
    bgColour: string,
    progress: number
}

const PlayerElement = (props: PlayerProps) => {
    const { bgColour, progress, playerName } = props;

    return (
        <div className = {styles.playerElement}>
            <div>{playerName}</div>
            <ProgressBar bgColour = {bgColour} progress = {progress}/>
        </div>
    )
}

interface ProgressBarProps {
    bgColour: string,
    progress: number
}

const ProgressBar = (props: ProgressBarProps) => {
    const { bgColour, progress } = props;
  
    return (
        <div className = {styles.progressBarBackground}>
            <div className = {styles.progressBarFiller} style = {{backgroundColor: bgColour, width: `${progress}%`}}>
                <span className = {styles.progressBarLabel}>
                    {`${progress}%`}
                </span>
            </div>
        </div>
    );
};