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

        console.log(
            `Current Letter: ${currentLetter.character} | Pressed Key: ${e.key}`,
        );

        //check if backspace
        if (e.key === 'Backspace') {
            if (currentWordIndex === 0 && currentLetterIndex === 0) return;
            //mark current letter as default
            gameState.quoteArray[currentWordIndex][
                currentLetterIndex
            ].fillState = FillState.DEFAULT;

            let previousLetterIndex = currentLetterIndex;
            let previousWordIndex = currentWordIndex;

            //decrement indexes
            if (currentLetterIndex > 0) {
                //mid word, only decrement letter
                previousLetterIndex = gameState.currentLetterIndex - 1;
            } else {
                //travers back a word
                previousWordIndex = gameState.currentWordIndex - 1;
                previousLetterIndex = quoteArray[previousWordIndex].length - 1;
                gameState.completedWordCount--;
            }

            //update state object
            gameState.currentLetterIndex = previousLetterIndex;
            gameState.currentWordIndex = previousWordIndex;
            gameState.quoteArray[previousWordIndex][
                previousLetterIndex
            ].fillState = FillState.CURSOR;

            // send state and return out before other checks
            dispatch(updateGameState({ ...gameState }));
            return;
        }

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
            //update player progress
            gameState.completedWordCount++;
            gameState.playerList[0].progress = Math.trunc(
                (gameState.completedWordCount / gameState.quoteArray.length) *
                    100,
            );
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
                    <PlayerContainer
                        key='player-container'
                        gameState={gameState}
                    />,
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
