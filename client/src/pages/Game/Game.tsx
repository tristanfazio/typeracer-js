import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PlayerContainer from '../../components/PlayerContainer';
import QuoteContainer from '../../components/QuoteContainer';
import { GameState } from '../../state/gameState/gameStateReducer';
import { RootState } from '../../state/store';
import styles from './Game.module.css';

function Game() {
    const gameState: GameState = useSelector(
        (state: RootState) => state.gameState,
    );

    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        // Remove event listeners on cleanup
        return () => {
          window.removeEventListener("keydown", downHandler);
        };
      }, []);

    return (
        <div className={styles.gamePage}>
            {gameState.isLoading
                ? 'Loading...'
                : [
                    //   <PlayerContainer />,
                      <QuoteContainer key = 'quote-container' gameState={gameState} />,
                  ]}
        </div>
    );
}

const downHandler = (e: KeyboardEvent): void => {
    console.log(`${e.key} + ${e.code}`);
}

export default Game;
