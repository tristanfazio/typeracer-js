import { FillState, GameState } from '../state/gameState/gameStateReducer';
import styles from './QuoteContainer.module.css';

const QuoteContainer = (props: { gameState: GameState }) => {
    const gameState = props.gameState;
    const quoteArray = gameState.quoteArray;
    const mappedComponents = quoteArray.map((word, wordIndex) => {
        return (
            <span
                key={wordIndex}
                className={
                    wordIndex < gameState.currentWordIndex ? styles.correct : ''
                }
            >
                {word.map((letter, letterIndex) => {
                    const key = `${wordIndex}-${letterIndex}`;
                    const cursor =
                        wordIndex == gameState.currentWordIndex &&
                        letterIndex == gameState.currentLetterIndex
                            ? styles.cursor
                            : '';

                    const correct =
                        letter.fillState === FillState.CORRECT
                            ? styles.correct
                            : '';

                    const error =
                        letter.fillState === FillState.ERROR
                            ? letter.character === ' '
                                ? styles.errorSpace
                                : styles.error
                            : '';

                    const style = error + correct + cursor;
                    const element =
                        letter.character == ' ' ? (
                            <span key={key} className={style}>
                                &nbsp;
                            </span>
                        ) : (
                            <span key={key} className={style}>
                                {letter.character}
                            </span>
                        );
                    return element;
                })}
            </span>
        );
    });
    return <p className={styles.quoteContainer}>{mappedComponents}</p>;
};

export default QuoteContainer;
