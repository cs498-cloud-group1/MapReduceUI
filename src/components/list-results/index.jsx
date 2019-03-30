import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import orderBy from 'lodash/orderBy';

import * as api from '../../api';

import '../common.scss';
import './index.scss';

export default class ListResults extends Component {
  state = {
    jobs: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    api
      .getJobs()
      .then(jobs => this.setState({ jobs }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const jobs = orderBy(this.state.jobs, 'createdAt', 'desc');
    if (this.state.loading) {
      return <div className="loader" />;
    }
    return (
      <div className="list-results">
        <table>
          <thead>
            <tr>
              <th>Job Name</th>
              <th>Created Date</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map(job => (
              <tr>
                <td>
                  <Link to={'/results/' + job.jobId}>
                    {job.jobName || 'missing'}
                  </Link>
                </td>
                <td>{new Date(job.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
