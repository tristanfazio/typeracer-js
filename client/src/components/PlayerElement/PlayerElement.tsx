import ProgressBar from '../ProgressBar';
import styles from './PlayerElement.module.css';

interface PlayerProps {
    playerName: string;
    progress: number;
}

const PlayerElement = (props: PlayerProps) => {
    const {progress, playerName} = props;

    return (
        <div className={styles.playerElement}>
            <div className={styles.userName}>{playerName}</div>
            <ProgressBar progress={progress}/>
            <span className={styles.progressLabel}>
                    {`${progress}%`}
                </span>
        </div>
    );
};

export default PlayerElement;
