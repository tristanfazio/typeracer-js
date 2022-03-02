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
            <div>{playerName}</div>
            <ProgressBar bgColour={bgColour} progress={progress} />
        </div>
    );
};

export default PlayerElement;
