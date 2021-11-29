import { combineReducers } from "redux";
import lobbyListReducer from './lobbyList/lobbyListReducer';

const reducers = combineReducers({
    lobbyList: lobbyListReducer
});

export default reducers;