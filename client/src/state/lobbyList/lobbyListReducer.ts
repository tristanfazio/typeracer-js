import { UPDATE_LOBBY_LIST } from  './actions';
import { GameListEntry } from '../../types';
import { LobbyAction } from './actionCreators';

interface LobbyState {
		gameList: GameListEntry[];
}
	
export const initialState: LobbyState = {
	gameList: [] 
}

function lobbyListReducer(state: LobbyState, action: LobbyAction): LobbyState {
	var newState:LobbyState = {gameList: []}
	switch(action.type) {
		case UPDATE_LOBBY_LIST:
			newState = { ...state, gameList: action.gameList };
			break;
	}
	return newState;
}

export default lobbyListReducer;