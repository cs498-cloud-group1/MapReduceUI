import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

import * as api from '../../api';

import './index.scss';

class CreateJob extends Component {
  state = {
    form: {
      jobName: '',
      url: '',
      map: '',
      reduce: ''
    },
    loading: false
  };

  handleChange = field => event => {
    this.setState({
      form: { ...this.state.form, [field]: event.target.value }
    });
  };

  submit = () => {
    if (Object.values(this.state.form).some(isEmpty)) {
      alert('You must fill out all fields');
      return;
    }
    this.setState({ loading: true });
    api
      .createJob(this.state.form)
      .then(response => {
        // go to result page now
        const jobId = response.jobId || (response.Item && response.Item.jobId);
        this.props.history.push('/result/' + jobId);
      })
      .catch(error => {
        alert(
          'There was an error submitting your job. Error message: \n' + error
        );
        this.setState({ loading: false });
      });
  };

  render() {
    if (this.state.loading) {
      return <div className="loader" />;
    }
    return (
      <div className="create-job">
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Input</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Job Name</td>
              <td>
                <input
                  type="text"
                  value={this.state.form.jobName}
                  onChange={this.handleChange('jobName')}
                />
              </td>
            </tr>
            <tr>
              <td>Data URL</td>
              <td>
                <input
                  type="url"
                  value={this.state.form.url}
                  onChange={this.handleChange('url')}
                />
              </td>
            </tr>
            <tr>
              <td>Map Function</td>
              <td>
                function map(key, value) {'{'}
                <textarea
                  rows="10"
                  value={this.state.form.map}
                  onChange={this.handleChange('map')}
                />
                {'}'}
              </td>
            </tr>
            <tr>
              <td>Reduce</td>
              <td>
                function reduce(key, values) {'{'}
                <textarea
                  rows="10"
                  value={this.state.form.reduce}
                  onChange={this.handleChange('reduce')}
                />
                {'}'}
              </td>
            </tr>
            <tr>
              <td />
              <td>
                <button className="submit" onClick={this.submit}>
                  Submit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(CreateJob);
