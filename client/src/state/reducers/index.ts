import { combineReducers } from "redux";
import lobbyListReducer from './lobbyListReducer';

const reducers = combineReducers({
    lobbyList: lobbyListReducer
});

export default reducers;