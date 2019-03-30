import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/home';
import Result from './components/result';
import CreateJob from './components/create-job';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/result/" exact component={Result} />
        <Route path="/result/:resultId" component={Result} />
        <Route path="/create/" component={CreateJob} />
      </Router>
    );
  }
}

export default App;
