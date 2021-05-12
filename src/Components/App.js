import React from "react";
import Jobs from './Jobs';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>

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