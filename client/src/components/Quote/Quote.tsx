import {useSelector} from 'react-redux';
import {FillState} from '../../state/gameState/gameStateReducer';
import {RootState} from '../../state/store';
import styles from './Quote.module.css';

export function Quote({quoteArray}) {
    const currentWordIndex = useSelector(
        (state: RootState) => state.gameState.currentWordIndex,
    );

    const currentLetterIndex = useSelector(
        (state: RootState) => state.gameState.currentLetterIndex,
    );

    const mappedComponents = quoteArray.map((word, wordIndex) => {
        return (
            <span
                key={wordIndex}
                className={wordIndex < currentWordIndex ? styles.correct : ''}
            >
                {word.map((letter, letterIndex) => {
                    const key = `${wordIndex}-${letterIndex}`;
                    const cursor =
                        wordIndex === currentWordIndex &&
                        letterIndex === currentLetterIndex
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
                    return letter.character === ' ' ? (
                        <span key={key} className={`${style} ${styles.font}`}>
                                &nbsp;
                            </span>
                    ) : (
                        <span key={key} className={`${style} ${styles.font}`}>
                                {letter.character}
                        </span>
                    );
                })}
            </span>
        );
    });

    return <>{mappedComponents}</>;
}

export default Quote;
