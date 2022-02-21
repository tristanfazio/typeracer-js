import { useState } from 'react';
import { useSelector } from 'react-redux';
import PlayerContainer from '../../components/PlayerContainer';
import QuoteContainer from '../../components/QuoteContainer';
import { GameState } from '../../state/gameState/gameStateReducer';
import { RootState } from '../../state/store';
import { Player } from '../../types';
import styles from './Game.module.css';

function Game() {
    const gameState: GameState = useSelector(
        (state: RootState) => state.gameState,
    );

    return (
        <div className={styles.gamePage}>
            <PlayerContainer />
            <QuoteContainer gameState={gameState} />
        </div>
    );
}

export default Game;
