
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';


import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import GMap from './components/GMap/GMap'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/' component={Login} />
          <Route path='/find' component={GMap} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
