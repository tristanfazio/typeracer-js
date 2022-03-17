import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import Quote from '../Quote';
import styles from './PostGame.module.css';
import {
    StatisticCard,
    StatisticCardProps,
} from './StatisticCard/StatisticCard';

const PostGame = () => {
    const completedWordCount = useSelector(
        (state: RootState) => state.gameState.completedWordCount,
    );
    const completedLettersCount = useSelector(
        (state: RootState) => state.gameState.completedLetterCount,
    );
    const wordCount = useSelector(
        (state: RootState) => state.gameState.quoteArray.length,
    );
    const initialTime = useSelector(
        (state: RootState) => state.gameState.initialTime,
    );
    const elapsedTime = useSelector(
        (state: RootState) => state.gameState.gameTime,
    );
    const errors = useSelector((state: RootState) => state.gameState.errors);

    const completionPercent = Math.trunc(
        (completedWordCount / wordCount) * 100,
    );
    const wpm = Math.round(completedLettersCount / 5 / ((initialTime - elapsedTime) / 60));
    const accuracy = completedLettersCount !== 0 ? Math.trunc(
        ((completedLettersCount - errors) / completedLettersCount) * 100
    ) : 0

    return (
        <div className={styles.postGameContainer}>
            <Rating completionPercent={completionPercent} accuracy={accuracy} />
            <StatsContainer
                completionPercent={completionPercent}
                accuracy={accuracy}
                wpm={wpm}
                errors={errors}
            />
            <PostGameQuote />
            <PlayAgainButton />
        </div>
    );
};

const Rating = (props: { completionPercent: number; accuracy: number }) => {
    const score = (props.completionPercent * 1.5 * props.accuracy) / 100;
    const getRating = function(score: number) {
        if (score >= 90) {
            return 'A+';
        }
        if (score >= 80) {
            return 'A';
        }
        if (score >= 70) {
            return 'B';
        }
        if (score >= 60) {
            return 'C';
        }
        if (score >= 50) {
            return 'D';
        }
        if (score <= 50) {
            return 'F';
        }
    };
    const rating = getRating(score);
    return (
        <div className={styles.titleContainer}>
            <p className={styles.title}>SCORE CARD</p>
            <div className={styles.rating}>{rating}</div>
        </div>
    );
};

const StatsContainer = (props: {
    completionPercent: number;
    accuracy: number;
    wpm: number;
    errors: number;
}) => {
    const completionProps: StatisticCardProps = {
        title: 'Completion',
        circle: true,
        value: props.completionPercent,
        percentage: true,
    };
    const wpmProps: StatisticCardProps = {
        title: 'WPM',
        circle: false,
        value: props.wpm,
        percentage: false,
    };
    const accuracyProps: StatisticCardProps = {
        title: 'Accuracy',
        circle: true,
        value: props.accuracy,
        percentage: true,
        subText: `Errors: ${props.errors}`,
    };

    return (
        <>
            <div className={styles.stat1}>
                <StatisticCard {...completionProps} />
            </div>
            <div className={styles.stat2}>
                <StatisticCard {...wpmProps} />
            </div>
            <div className={styles.stat3}>
                <StatisticCard {...accuracyProps} />
            </div>
        </>
    );
};

const PostGameQuote = () => {
    const quoteArray = useSelector(
        (state: RootState) => state.gameState.quoteArray,
    );
    const author = useSelector((state: RootState) => state.gameState.author);

    return (
        <>
            <div className={styles.postGameQuoteContainer}>
                <div className={styles.postGameQuote}>
                    <Quote quoteArray={quoteArray} />
                </div>
                <p className={styles.author}>{`- ${author}`}</p>
            </div>
        </>
    );
};

const PlayAgainButton = () => {
    return (
        <div className={styles.buttonContainer}>
            <button
                type='button'
                onClick={() => {}}
                className={`
        ${styles.button} 
        ${styles.playAgainButton}`}
            >
                Play again
            </button>
        </div>
    );
};

export default PostGame;
