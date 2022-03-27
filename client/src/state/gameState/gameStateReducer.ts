import {GameAction, UpdateGameStateAction, UpdateGameTimeAction} from './actionCreators';
import {
    INIT_GAME,
    SET_STATUS_COUNTDOWN,
    SET_STATUS_FINISHED,
    SET_STATUS_PLAYING,
    SET_STATUS_POSTGAME,
    UPDATE_GAME_STATE,
    UPDATE_GAME_TIME,
} from './actions';

const testString =
    `You followed your conscience in the hope that others would follow theirs. ` +
    `You didn't do it for a reward, or a pat on the head. The universe never tells us if we did right or wrong. ` +
    `It's more important to try and help people, and to know that you did. ` +
    `More important that someone else's life gets better, than for you to feel good about yourself. ` +
    `You never know the effect you might have on someone, not really. ` +
    `Maybe one cruel thing you said haunts them forever. ` +
    `Maybe one moment of kindness gives them comfort or courage. Maybe you said the one thing they needed to hear. ` +
    `It doesn't matter if you ever know. You just have to try.`;

export enum FillState {
    DEFAULT = 'DEFAULT',
    CORRECT = 'CORRECT',
    CURSOR = 'CURSOR',
    ERROR = 'ERROR',
}

export class CharElement {
    character: string = '';
    fillState: FillState = FillState.DEFAULT;
    index: number = 0;

    constructor(character: string, index: number) {
        this.character = character;
        this.index = index;
    }
}

export interface Player {
    playerId: string;
    playerName: string;
    progress: number;
}

export enum GameStatus {
    LOADING = 'LOADING',
    COUNTDOWN = 'COUNTDOWN',
    PLAYING = 'PLAYING',
    FINISHED = 'FINISHED',
    POSTGAME = 'POSTGAME',
}

export interface GameState {
    gameId: string;
    status: GameStatus;
    initialTime: number;
    playerList: Player[];
    quoteArray: CharElement[][];
    author: string;
    currentWordIndex: number;
    currentLetterIndex: number;
    completedWordCount: number;
    completedLetterCount: number;
    errors: number;
    gameTime: number,
}

export const initialState: GameState = {
    gameId: 'test-game-id-123',
    status: GameStatus.COUNTDOWN,
    initialTime: 1,
    playerList: [{playerId: '1', playerName: 'Player 1', progress: 0}],
    quoteArray: parseInitialQuoteToWords(testString),
    author: 'Naomi Nagata',
    currentWordIndex: 0,
    currentLetterIndex: 0,
    completedWordCount: 0,
    completedLetterCount: 0,
    errors: 0,
    gameTime: 0,
};

const gameStateReducer = (
    state = initialState,
    action: GameAction,
): GameState => {
    switch (action.type) {
        case UPDATE_GAME_STATE: {
            const updateAction = action as UpdateGameStateAction;
            return {...updateAction.gameState};
        }
        case UPDATE_GAME_TIME: {
            const updateAction = action as UpdateGameTimeAction;
            console.log(updateAction.time)
            return {...state, gameTime: updateAction.time}
        }
        case INIT_GAME: {
            return {...initialState}
        }
        case SET_STATUS_COUNTDOWN:
            return {...state, status: GameStatus.COUNTDOWN};
        case SET_STATUS_FINISHED:
            return {...state, status: GameStatus.FINISHED};
        case SET_STATUS_PLAYING:
            return {...state, status: GameStatus.PLAYING};
        case SET_STATUS_POSTGAME:
            return {...state, status: GameStatus.POSTGAME};
        default:
            return state;
    }
};

export default gameStateReducer;

function parseInitialQuoteToWords(quote: string): CharElement[][] {
    return quote.split(/([^\s]+\s?)/g)
        .filter((word) => word)
        .map((word) => {
            return word.split('').map((charElement, index) => {
                return new CharElement(charElement, index);
            });
        });
}
