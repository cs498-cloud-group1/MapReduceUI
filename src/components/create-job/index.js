import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';
import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/chrome';
import AceEditor from 'react-ace';

import * as api from '../../api';

import '../common.scss';
import './index.scss';

const defaultMap = `function map(key, value) {

}`;

const defaultReduce = `function reduce(key, values) {

}`;

const aceOptions = {
  theme: 'chrome',
  mode: 'javascript',
  height: '150px',
  highlightActiveLine: true,
  setOptions: {
    showLineNumbers: true,
    tabSize: 2
  },
  editorProps: { $blockScrolling: true }
};

class CreateJob extends Component {
  state = {
    form: {
      jobName: '',
      url: '',
      map: defaultMap,
      reduce: defaultReduce
    },
    loading: false
  };

  handleChange = field => event => {
    const val = event.target ? event.target.value : event;
    this.setState({
      form: { ...this.state.form, [field]: val }
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
        this.props.history.push('/results/' + jobId);
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
              <td>
                Map Function
                <div className="info">Please use JavaScript</div>
              </td>
              <td>
                <AceEditor
                  name="map-function"
                  onChange={this.handleChange('map')}
                  value={this.state.form.map}
                  {...aceOptions}
                />
              </td>
            </tr>
            <tr>
              <td>
                Reduce Function
                <div className="info">Please use JavaScript</div>
              </td>
              <td>
                <AceEditor
                  name="reduce-function"
                  onChange={this.handleChange('reduce')}
                  value={this.state.form.reduce}
                  {...aceOptions}
                />
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
