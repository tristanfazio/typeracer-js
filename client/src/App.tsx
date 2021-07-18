import './App.css';
import GameMenu from './components/GameMenu';
import { Router, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import history from './utils/history';
import CreateGame from './components/CreateGame';
import Header from './components/Header';
import { Player } from './utils/types';
import socket from './socketConfig';

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
          history.push(`/game/${gameState.gameId}`)
      }
  },[gameState.gameId]);


  return (
    <div>
      <Header/>
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component = {GameMenu}/>
            <Route path="/game/create" component = {CreateGame}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
