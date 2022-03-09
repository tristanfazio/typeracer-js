import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setStatusPlaying } from '../../state/gameState/actionCreators';
import { AppDispatch } from '../../state/store';
import Timer from '../Timer';
import styles from './Countdown.module.css';

const CountDown = () => {
    const [counting, setCounting] = useState(true);
    const dispatch: AppDispatch = useDispatch();

    const onFinish = () => {
        setCounting(false);

        setTimeout(() => {
            dispatch(setStatusPlaying());
        }, 1000);
    };

    return (
        <div className={styles.counterContainer}>
            {counting ? (
                <>
                    <p className={`${styles.font} ${styles.preamble}`}>
                        Start typing when the quote appears!
                    </p>
                    <Timer initialTime={3} onFinish={onFinish} />
                </>
            ) : (
                <p className={`${styles.font} ${styles.type}`}>Type!</p>
            )}
        </div>
    );
};

export default CountDown;
