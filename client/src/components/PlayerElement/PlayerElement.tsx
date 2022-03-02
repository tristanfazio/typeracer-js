import ProgressBar from '../ProgressBar';
import styles from './PlayerElement.module.css';

interface PlayerProps {
    playerName: string;
    bgColour: string;
    progress: number;
}

const PlayerElement = (props: PlayerProps) => {
    const { bgColour, progress, playerName } = props;

    return (
        <div className={styles.playerElement}>
            <div className = {styles.userName}>{playerName}</div>
            <ProgressBar bgColour={bgColour} progress={progress} />
            <span className={styles.progressLabel}>
                    {`${progress}%`}
                </span>
        </div>
    );
};

export default PlayerElement;
