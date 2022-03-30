import socket from '../sockets/socketConfig';
import { GameListEntry } from '../utils/types';
import { updateLobby } from '../state/lobbyList/actionCreators';
import { store } from '../state/store';

const updateLobbyListener = (payload: GameListEntry[]) => {
    store.dispatch(updateLobby(payload))
}


export function registerUpdateLobbyListener() {
    socket.on("update-lobby", updateLobbyListener)
}

export function deregisterUpdateLobbyListener() {
    socket.off("update-lobby", updateLobbyListener)
}