import React, { Component } from 'react';

import * as api from '../../api';

import '../common.scss';
import './index.scss';

export default class ListResults extends Component {
  state = {
    job: undefined
  };

  componentDidMount() {
    this.setState({ loading: true });
    api
      .getJob(this.props.match.params.resultId)
      .then(job => this.setState({ job }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const job = this.state.job;
    if (this.state.loading) {
      return <div className="loader" />;
    }
    return (
      <div className="result">
        <pre>{JSON.stringify(job, null, 2)}</pre>
      </div>
    );
  }
}
