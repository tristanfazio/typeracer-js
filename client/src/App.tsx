import './App.css';
import GameMenu from './pages/GameMenu/GameMenu';
import { Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import history from './utils/history';
import CreateGame from './pages/CreateGame/CreateGame';
import JoinGame from './pages/JoinGame/JoinGame';
import Game from './pages/Game/Game';
import Header from './components/Header/Header';
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
    <div className="App">
      {/* <Header/> */}
      <Provider store={ store } >
          <Router history={history}>
            <Switch>
              {/* <Route exact path="/" component = {GameMenu}/>
              <Route path="/game/create" exact component = {CreateGame}/>
              <Route path="/game/join" exact component = {JoinGame}/> */}
              <Route path="/" exact component = {Game}/>
            </Switch>
          </Router>
      </Provider>
    </div>
  );
}

export default App;
