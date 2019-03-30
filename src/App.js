import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Result from './pages/result';
import Create from './pages/create';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/result/" exact component={Result} />
        <Route path="/result/:resultId" component={Result} />
        <Route path="/create/" component={Create} />
      </Router>
    );
  }
}

export default App;
