import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGameFinished } from '../../state/gameState/actionCreators';
import { AppDispatch, RootState } from '../../state/store';
import styles from './Timer.module.css';

const Timer = (props: { initialTime: number }) => {
    const isStarted: boolean = useSelector(
        (state: RootState) => state.gameState.isStarted,
    );
    const dispatch: AppDispatch = useDispatch();


    const [counter, setCounter] = useState(props.initialTime);
    
    useEffect(() => {
        if(counter === 0) {
            dispatch(setGameFinished());
        }
        counter > 0 && isStarted && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter, isStarted]);

    return (
        <div className={styles.timerContainer}>
            <span className={styles.timerLabel}>{`${counter}s`}</span>
        </div>
    );
};

export default Timer;
