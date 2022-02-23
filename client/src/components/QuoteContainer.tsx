import { CharElement, GameState } from '../state/gameState/gameStateReducer';
import styles from './QuoteContainer.module.css';

const QuoteContainer = (props: { gameState: GameState }) => {
    const gameState = props.gameState;
    return (
        <div className={styles.quoteContainer}>
            <Quote quoteArray={gameState.quoteArray} />
        </div>
    );
};

const Quote = (props: { quoteArray: CharElement[] }) => {
    const quoteArray = props.quoteArray;
    const charElements = quoteArray.map((charElement) => {
        return <CharElementRender key={charElement.index} charElement={charElement} />;
    });
    return <div>{charElements}</div>;
};

const CharElementRender = (props: { charElement: CharElement }) => {
    return (
        <div key={props.charElement.index}>{props.charElement.character}</div>
    );
};

export default QuoteContainer;
