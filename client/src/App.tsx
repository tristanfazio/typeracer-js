import './App.css';
import GameMenu from './components/GameMenu';
import { Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import history from './utils/history';
import CreateGame from './components/CreateGame';
import JoinGame from './components/JoinGame';
import Game from './components/Game';
import Header from './components/Header';
import { Player } from './types';
import socket from './sockets/socketConfig';
import { Provider } from 'react-redux';
import { store } from './state/store';

interface GameState {
  gameId: string,
  players: Player[]
}

function App() {
  const[gameState, setGameState] = useState<GameState>({gameId: '', players: []});

  useEffect(() => {
    socket.on('update-game', (payload: GameState) => {
        setGameState({ ...payload });
        console.log(payload);
    });
    return () => {
      
    }
  },[]);

  useEffect(()=> {
      if(gameState.gameId !== '') {
          history.push({
            pathname:`/game/${gameState.gameId}`,
            state: gameState
          })
      }
  },[gameState.gameId]);

  return (
    <div>
      {/* <Header/> */}
      <Provider store={ store } >
        <div className="App">
          <Router history={history}>
            <Switch>
              <Route exact path="/" component = {GameMenu}/>
              <Route path="/game/create" exact component = {CreateGame}/>
              <Route path="/game/join" exact component = {JoinGame}/>
              <Route path="/game/:gameId" exact component = {Game}/>
            </Switch>
          </Router>
        </div>
      </Provider>
    </div>
  );
}

export default App;
