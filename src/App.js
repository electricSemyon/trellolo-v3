import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import MainPage from './components/MainPage';
import LoginPage from './components/Login';

const Routing = () => (
  <Router>
    <div>
      <Route exact path="/login" component={LoginPage}/>
      <Route exact path="/project/:id" component={MainPage}/>
    </div>
  </Router>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routing />
      </div>
    );
  }
}

export default App;
