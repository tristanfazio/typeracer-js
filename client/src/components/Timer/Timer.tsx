import { useEffect, useState } from 'react';
import styles from './Timer.module.css';

const Timer = (props: { initialTime: number; onFinish: () => void }) => {
    const [counter, setCounter] = useState(props.initialTime);
    const onFinish = props.onFinish;

    useEffect(() => {
        if (counter === 0) {
            onFinish();
            return;
        }

        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter, onFinish]);

    return (
        <div className={styles.timerContainer}>
            <span className={styles.timerLabel}>{`${counter}s`}</span>
        </div>
    );
};

export default Timer;
