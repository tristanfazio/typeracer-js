import { UPDATE_GAME_STATE } from "./actions";
import { GameState } from "./gameStateReducer";

export type UpdateGameStateAction = {
	type: string,
	gameState: GameState
}

export function updateGameState(gameState: GameState) {
  	const action: UpdateGameStateAction = {
    	type: UPDATE_GAME_STATE,
		gameState: gameState
 	}
  	return action;
}