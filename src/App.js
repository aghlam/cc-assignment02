
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';


// import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'



function App() {
  return (
    <Router>
      <div className="App">
        {/* <Nav /> */}
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
