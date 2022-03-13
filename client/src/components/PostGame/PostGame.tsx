import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import Quote from '../Quote';
import styles from './PostGame.module.css';
import {
    StatisticCardProps,
    StatisticCard,
} from './StatisticCard/StatisticCard';

const PostGame = () => {
    return (
        <div className={styles.postGameContainer}>
            <Rating />
            <StatsContainer />
            <PostGameQuote />
            <PlayAgainButton />
        </div>
    );
};

const Rating = () => {
    return <div className={styles.rating}>{`Rating: ${`A+`}`}</div>;
};

const StatsContainer = () => {
    const completedWordCount = useSelector(
        (state: RootState) => state.gameState.completedWordCount,
    );
    const wordCount = useSelector(
        (state: RootState) => state.gameState.quoteArray.length,
    );
    const completionPercent = Math.trunc(
        (completedWordCount / wordCount) * 100,
    );

    const completionProps: StatisticCardProps = {
        title: 'Completion',
        circle: true,
        value: completionPercent,
        percentage: true,
    };
    const wpmProps: StatisticCardProps = {
        title: 'WPM',
        circle: false,
        value: 62,
        percentage: false,
    };
    const accuracyProps: StatisticCardProps = {
        title: 'Accuracy',
        circle: true,
        value: 74,
        percentage: true,
        subText: 'Errors: 4',
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
                Play again?
            </button>
        </div>
    );
};

export default PostGame;
