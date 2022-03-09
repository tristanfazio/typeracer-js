import styles from './PostGame.module.css';

const PostGame = () => {
    return (
        <div className={styles.postGameContainer}>
            <Rating/>
            <StatsContainer/>
            <br/>
            <PostGameQuote/>
        </div>
    );
};

const Rating = () => {
    return (
        <div className = { styles.rating }>
            A+
        </div>
    );
}

const StatsContainer = () => {
    return (
        <div className = { styles.statsContainer }>
            <CompletionCard/>
            <WPMCard/>
            <AccuracyCard/>
            <PlayAgainButton/>
        </div>
    );
}

const CompletionCard = () => {
    return (
        <></>
    )
}

const WPMCard = () => {
    return (
        <></>
    )
}

const AccuracyCard = () => {
    return (
        <></>
    )
}

const PostGameQuote = () => {
    return (
        <div className = { styles.postGameQuote }>
            <p></p>
        </div>
    );
}

const PlayAgainButton = () => {
    return (
        <div className = { styles.playAgainButton }>
            Play Again?
        </div>
    );
}

export default PostGame;
