import Quote from './../Quote/';
import {GameState, GameStatus} from '../../state/gameState/gameStateReducer';
import Countdown from '../Countdown';
import styles from './QuoteContainer.module.css';

const QuoteContainer = (props: { gameState: GameState }) => {
    // TODO: possibly remove props drilling and use reducer to determine state
    const gameState = props.gameState;
    const quoteArray = gameState.quoteArray;
    const status = gameState.status;

    const finishedQuote =
        gameState.completedWordCount === gameState.quoteArray.length;
    return (
        <div className={styles.quoteContainer}>
            <Quote quoteArray={quoteArray} />
            {status === GameStatus.COUNTDOWN && <Countdown />}
            {status === GameStatus.FINISHED && (
                <Finish finishedQuote={finishedQuote} />
            )}
        </div>
    );
};

const Finish = ({ finishedQuote }) => {
    const finishText = finishedQuote ? <p>Finished!</p> : <p>Times Up!</p>;
    return <div className={styles.finish}>{finishText}</div>;
};

export default QuoteContainer;
