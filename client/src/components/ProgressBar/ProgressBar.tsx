import styles from './ProgressBar.module.css';

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
                style={{
                    backgroundColor: bgColour,
                    width: `${progress}%`,
                }}
            >
                <span className={styles.progressBarLabel}>
                    {`${progress}%`}
                </span>
            </div>
        </div>
    );
};

export default ProgressBar;
