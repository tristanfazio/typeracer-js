import {useSelector} from 'react-redux';
import {RootState} from '../../state/store';
import Quote from '../Quote';
import styles from './PostGame.module.css';
import {StatisticCard, StatisticCardProps,} from './StatisticCard/StatisticCard';

const PostGame = () => {
    return (
        <div className={styles.postGameContainer}>
            <Rating/>
            <StatsContainer/>
            <PostGameQuote/>
            <PlayAgainButton/>
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
    const completedLettersCount = useSelector(
        (state: RootState) => state.gameState.completedLetterCount,
    );
    const wordCount = useSelector(
        (state: RootState) => state.gameState.quoteArray.length,
    );
    const initialTime = useSelector(
        (state: RootState) => state.gameState.initialTime,
    )
    const elapsedTime = useSelector(
        (state: RootState) => state.gameState.gameTime,
    )
    const errors = useSelector(
        (state: RootState) => state.gameState.errors,
    );

    const completionPercent = Math.trunc(
        (completedWordCount / wordCount) * 100,
    );
    const wpm = (completedLettersCount / 5) / ((initialTime - elapsedTime) / 60);
    const accuracy = Math.trunc((completedLettersCount - errors) / completedLettersCount * 100);


    const completionProps: StatisticCardProps = {
        title: 'Completion',
        circle: true,
        value: completionPercent,
        percentage: true,
    };
    const wpmProps: StatisticCardProps = {
        title: 'WPM',
        circle: false,
        value: wpm,
        percentage: false,
    };
    const accuracyProps: StatisticCardProps = {
        title: 'Accuracy',
        circle: true,
        value: accuracy,
        percentage: true,
        subText: `Errors: ${errors}`,
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
                    <Quote quoteArray={quoteArray}/>
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
                onClick={() => {
                }}
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
