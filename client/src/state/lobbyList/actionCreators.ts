import { GameListEntry } from "../../types";
import { UPDATE_LOBBY_LIST } from "./actions"

export type LobbyAction =
	| UpdateLobbyAction

export type UpdateLobbyAction = {
	type: string,
	gameList: GameListEntry[]
}

export function updateLobby(gameList: GameListEntry[]) {
  	const action: UpdateLobbyAction = {
    	type: UPDATE_LOBBY_LIST,
		gameList: gameList
 	}
  	return action;
}