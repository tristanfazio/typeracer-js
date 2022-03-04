import { SET_GAME_FINISHED, UPDATE_GAME_STATE } from './actions';
import { GameState } from './gameStateReducer';

export type GameAction = UpdateGameStateAction | SetGameFinishedAction;

export interface UpdateGameStateAction  {
    type: string;
    gameState: GameState;
};

export interface SetGameFinishedAction  {
    type: string;
};

export function updateGameState(gameState: GameState): UpdateGameStateAction {
    const action: UpdateGameStateAction = {
        type: UPDATE_GAME_STATE,
        gameState: gameState,
    };
    return action;
}

export function setGameFinished(): SetGameFinishedAction {
    const action: SetGameFinishedAction = {
        type: SET_GAME_FINISHED,
    };
    return action;
}
