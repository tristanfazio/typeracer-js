import { combineReducers } from "redux";
import gameStateReducer from "./gameState/gameStateReducer";
import lobbyListReducer from './lobbyList/lobbyListReducer';

const reducers = combineReducers({
    lobbyListState: lobbyListReducer,
    gameState: gameStateReducer
});

export default reducers;