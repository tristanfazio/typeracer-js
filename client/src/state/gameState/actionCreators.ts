import {
    SET_STATUS_COUNTDOWN,
    SET_STATUS_FINISHED,
    SET_STATUS_PLAYING,
    SET_STATUS_POSTGAME,
    UPDATE_GAME_STATE,
    UPDATE_GAME_TIME,
    INIT_GAME,
} from './actions';
import { GameState } from './gameStateReducer';

export type GameAction =
    | UpdateGameStateAction
    | SetStatusAction
    | UpdateGameTimeAction
    | InitGameAction;

export interface UpdateGameStateAction {
    type: string;
    gameState: GameState;
}

export interface SetStatusAction {
    type: string;
}

export interface UpdateGameTimeAction {
    type: string;
    time: number;
}

export interface InitGameAction {
    type: string;
}

export function updateGameState(gameState: GameState): UpdateGameStateAction {
    const action: UpdateGameStateAction = {
        type: UPDATE_GAME_STATE,
        gameState,
    };
    return action;
}

export function updateGameTime(time: number): UpdateGameTimeAction {
    const action: UpdateGameTimeAction = {
        type: UPDATE_GAME_TIME,
        time,
    };
    return action;
}

export function initGame(): InitGameAction {
    const action: InitGameAction = {
        type: INIT_GAME,
    };
    return action;
}

export function setStatusFinished(): SetStatusAction {
    const action: SetStatusAction = {
        type: SET_STATUS_FINISHED,
    };
    console.log('FINISHED');
    return action;
}

export function setStatusCountdown(): SetStatusAction {
    const action: SetStatusAction = {
        type: SET_STATUS_COUNTDOWN,
    };
    console.log('COUNTDOWN');
    return action;
}

export function setStatusPlaying(): SetStatusAction {
    const action: SetStatusAction = {
        type: SET_STATUS_PLAYING,
    };
    console.log('PLAYING');
    return action;
}

export function setStatusPostgame(): SetStatusAction {
    const action: SetStatusAction = {
        type: SET_STATUS_POSTGAME,
    };
    console.log('POSTGAME');
    return action;
}
