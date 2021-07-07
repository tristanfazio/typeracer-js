import React,{ useEffect } from 'react';
import './App.css';
import GameMenu from './components/GameMenu';
import { Router, Route, Switch } from 'react-router-dom'
import history from './utils/history';
import CreateGame from './components/CreateGame';
import Header from './components/Header';
import socket from './socketConfig';

function App() {
  useEffect(()=>{
    socket.on('test',msg=>{
      console.log(msg);
    })
  })
  return (
    <div>
      <Header/>
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/" component = {GameMenu}/>
            <Route exact path="/game/create" component = {CreateGame}/>
            <Route exact path="/game/join" component = {CreateGame}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
