import './App.css';
import GameMenu from './components/GameMenu';
import { Router, Route, Switch } from 'react-router-dom'
import history from './utils/history';
import CreateGame from './components/CreateGame';
import Header from './components/Header';

function App() {
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
