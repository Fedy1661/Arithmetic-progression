import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Formulae from '../Formulae';
import Testing from '../Testing/testing';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1 className="title">Арифмитическая прогрессия</h1>
          <hr />
          <Switch>
            <Route path="/" component={Formulae} exact />
            <Route path='/test' component={Testing} />
            <Redirect to='/' />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;