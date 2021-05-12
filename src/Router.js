import './Components/App.css';
import React from "react";
import Jobs from './Components/Jobs';
import Home from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>

    <Switch>
          <Route exact path="/jobs">
            <Jobs/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
    </Switch>

    </Router>   
  );

}


export default App;