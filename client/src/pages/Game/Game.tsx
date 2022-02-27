import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlayerContainer from '../../components/PlayerContainer';
import QuoteContainer from '../../components/QuoteContainer';
import { updateGameState } from '../../state/gameState/actionCreators';
import { FillState, GameState } from '../../state/gameState/gameStateReducer';
import { AppDispatch, RootState } from '../../state/store';
import styles from './Game.module.css';

function Game() {
    const gameState: GameState = useSelector(
        (state: RootState) => state.gameState,
    );
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        window.addEventListener('keydown', onKeyDown);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    //fake loading
    // useEffect(() => {
    //     setTimeout(() => {
    //         dispatch(updateGameState({ ...gameState, isLoading: false }));
    //     }, 1000);
    // }, []);

    const onKeyDown = (e: KeyboardEvent): void => {
        //TODO: add header guard for isGameStarted
        //TODO: add header gaurd for allowed key presses, eg no function keys
        if (e.location !== KeyboardEvent.DOM_KEY_LOCATION_STANDARD) return;
        console.log(gameState);

        const quoteArray = gameState.quoteArray;
        const currentWordIndex = gameState.currentWordIndex;
        const currentLetterIndex = gameState.currentLetterIndex;
        const currentLetter = quoteArray[currentWordIndex][currentLetterIndex];

        //check of backspace
        //if backspace
        //mark current letter as default
        //decrement indexes
        // return out before other checks

        //check if correct
        if (currentLetter.character === e.key.toString()) {
            //correct
            //mark letter correct
            gameState.quoteArray[currentWordIndex][
                currentLetterIndex
            ].fillState = FillState.CORRECT;
        } else {
            //incorrect keypress
            //mark letter incorrect
            gameState.quoteArray[currentWordIndex][
                currentLetterIndex
            ].fillState = FillState.ERROR;
        }
        //check for remaining letters in word
        if (currentLetterIndex < quoteArray[currentWordIndex].length - 1) {
            //remaining letters, increment letter index
            gameState.currentLetterIndex++;
            dispatch(updateGameState({ ...gameState }));
            return;
        } else {
            //else, no remaining letters in word
            //reset letter index to 0
            gameState.currentLetterIndex = 0;
            //progress word index
            gameState.currentWordIndex++;
            dispatch(updateGameState({ ...gameState }));
            return;
        }
    };

    return (
        <div className={styles.gamePage}>
            {gameState.isLoading ? (
                <p className={styles.loadingText}>Loading...</p>
            ) : (
                [
                    //   <PlayerContainer />,
                    <QuoteContainer
                        key='quote-container'
                        gameState={gameState}
                    />,
                ]
            )}
        </div>
    );
}

export default Game;
