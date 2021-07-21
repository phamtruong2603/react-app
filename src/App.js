import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MainProvider } from './components/contextAPI/Provider'

import HomePage from './components/HomePage/Home';
import Personal from './components/personal/personal';
import Selection from './components/Selections/selection';
import Signin from './components/signin_logout/signin';
import TeamWork from './components/TeamWork/team_work';

function App() {
  return (
    <MainProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/personal">
              <Personal />
            </Route>
            <Route path="/team work">
              <TeamWork />
            </Route>
            <Route path="/selection">
              <Selection />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </MainProvider>
  );
}

export default App;
