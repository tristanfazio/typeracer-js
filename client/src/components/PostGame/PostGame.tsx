import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import Quote from '../Quote';
import styles from './PostGame.module.css';

const PostGame = () => {
    return (
        <div className={styles.postGameContainer}>
            <Rating />
            <StatsContainer />
            <br />
            {/* <PostGameQuote /> */}
            <PlayAgainButton />
        </div>
    );
};

const Rating = () => {
    return <div className={styles.rating}>A+</div>;
};

const StatsContainer = () => {
    return (
        <div className={styles.statsContainer}>
            <StatisticCard />
            <StatisticCard />
            <StatisticCard />
        </div>
    );
};

interface StatisticCardProps {
    title: string,
    value: number,
    percentage: boolean,
    subText?: string,
}

const StatisticCard = () => {
    return <></>;
};

const PostGameQuote = () => {
    const quoteArray = useSelector(
        (state: RootState) => state.gameState.quoteArray,
    );
    const author = useSelector((state: RootState) => state.gameState.author);

    return (
        <>
            <div className={styles.postGameQuoteContainer}>
                <Quote quoteArray={quoteArray} />
            </div>
            <p className = { styles.author }>{`- ${author}`}</p>
        </>
    );
};

const PlayAgainButton = () => {
    return <div className = {styles.buttonContainer}>
    <button type = "button" onClick = {()=> {}} className = {`
        ${styles.button} 
        ${styles.playAgainButton}`}>
            Play again?
    </button>
</div>
};

export default PostGame;
