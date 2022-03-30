import {
    INIT_GAME,
    RESET_GAME,
    SET_STATUS_COUNTDOWN,
    SET_STATUS_FINISHED,
    SET_STATUS_PLAYING,
    SET_STATUS_POSTGAME,
    UPDATE_GAME_STATE,
    INCREMENT_GAME_TIME,
} from './actions';
import { CharElement, GameState } from './gameStateReducer';
import { getRandomQuote, parseInitialQuoteToWords } from '../../utils/quotes';

export type GameAction =
    | UpdateGameStateAction
    | SetStatusAction
    | IncrementGameTimeAction
    | InitGameAction
    | ResetGameAction;

export interface ResetGameAction {
    type: string;
}
export interface UpdateGameStateAction {
    type: string;
    gameState: GameState;
}

export interface SetStatusAction {
    type: string;
}

export interface IncrementGameTimeAction {
    type: string;
}

export interface InitGameAction {
    type: string;
    quoteArray: CharElement[][];
    author: string;
}

export function updateGameState(gameState: GameState): UpdateGameStateAction {
    return {
        type: UPDATE_GAME_STATE,
        gameState,
    };
}

export function incrementGameTime(): IncrementGameTimeAction {
    return {
        type: INCREMENT_GAME_TIME,
    };
}

export function initGame(): InitGameAction {
    const quote = getRandomQuote();
    const quoteArray = parseInitialQuoteToWords(quote.content);
    return {
        type: INIT_GAME,
        quoteArray,
        author: quote.author,
    };
}

export function resetGame(): ResetGameAction {
    return {
        type: RESET_GAME,
    };
}

export function setStatusFinished(): SetStatusAction {
    return {
        type: SET_STATUS_FINISHED,
    };
}

export function setStatusCountdown(): SetStatusAction {
    return {
        type: SET_STATUS_COUNTDOWN,
    };
}

export function setStatusPlaying(): SetStatusAction {
    return {
        type: SET_STATUS_PLAYING,
    };
}

export function setStatusPostgame(): SetStatusAction {
    return {
        type: SET_STATUS_POSTGAME,
    };
}
