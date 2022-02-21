import { GameState } from '../state/gameState/gameStateReducer';
import styles from './QuoteContainer.module.css';

const QuoteContainer = (props: { gameState: GameState }) => {
    const gameState = props.gameState;
    return (
        <div className={styles.quoteContainer}>
            <p>{gameState.quote}</p>
        </div>
    );
};

export default QuoteContainer;
