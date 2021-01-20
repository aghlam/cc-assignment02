
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';


import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Login from './components/Login/Login'


function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path='/' component={Home} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
