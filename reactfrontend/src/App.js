
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';


import Navigation from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import Cafe from './components/Cafe/Cafe'
// import CafePage from './components/Cafe/CafePage'
import GMap from './components/GMap/GMap'



function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/cafe/:cafe_id' component={Cafe} />
          <Route path='/find' component={GMap} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
