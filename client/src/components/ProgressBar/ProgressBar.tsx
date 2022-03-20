import styles from './ProgressBar.module.css';

interface ProgressBarProps {
    progress: number;
}

const ProgressBar = (props: ProgressBarProps) => {
    const {progress} = props;
    return (
        <div className={styles.progressBarBackground}>
            <div
                className={styles.progressBarFiller}
                style={{
                    width: `${progress}%`,
                }}
            >
                <span className={styles.progressBarLabel}>
                    &#128640;
                </span>
            </div>
        </div>
    );
};

export default ProgressBar;
