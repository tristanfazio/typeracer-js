import { UPDATE_LOBBY_LIST } from  './actions';
import { GameListEntry } from '../../types';
import { LobbyAction } from './actionCreators';

interface LobbyState {
		gameList: GameListEntry[];
}
	
export const initialState: LobbyState = {
	gameList: [] 
}

const lobbyListReducer = (state = initialState, action: LobbyAction): LobbyState => {
	switch(action.type) {
		case UPDATE_LOBBY_LIST:
			return { ...state, gameList: action.gameList };
		default:
			return initialState
	}
}

export default lobbyListReducer;