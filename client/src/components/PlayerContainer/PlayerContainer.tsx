import {GameState, GameStatus} from '../../state/gameState/gameStateReducer';
import styles from './PlayerContainer.module.css';
import {CountdownCircleTimer} from 'react-countdown-circle-timer';
import {setStatusFinished, updateGameTime} from '../../state/gameState/actionCreators';
import React from 'react';
import ProgressBar from '../ProgressBar';
import {AppDispatch} from '../../state/store';
import {useDispatch} from 'react-redux';

const PlayerContainer = (props: { gameState: GameState }) => {
    const dispatch: AppDispatch = useDispatch();

    const gameState = props.gameState;
    const gameStatus = gameState.status;

    return (
        <div className={styles.playerContainer}>
            <ProgressBar progress={gameState.playerList[0].progress}/>
            <CountdownCircleTimer
                isPlaying={gameStatus === GameStatus.PLAYING}
                duration={gameState.initialTime}
                colors='#9C9BF4'
                size={40}
                strokeWidth={4}
                trailStrokeWidth={4}
                onComplete={() => {
                    dispatch(setStatusFinished());
                }}
                onUpdate={(remainingTime: number) => {
                    dispatch(updateGameTime(remainingTime));
                }}
            >
                {({remainingTime}) => (
                    <div className={styles.timerLabel}>
                        {remainingTime}
                    </div>
                )}
            </CountdownCircleTimer>
            <Dots/>
        </div>
    );
};

const Dots = () => {
    return (
        <div className={styles.dots}>
            <span className={`${styles.dot} ${styles.red}`}/>
            <span className={`${styles.dot} ${styles.yellow}`}/>
            <span className={`${styles.dot} ${styles.green}`}/>
        </div>
    )
}
export default PlayerContainer;
