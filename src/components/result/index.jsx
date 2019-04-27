import React, { Component } from 'react';
import AceEditor from 'react-ace';

import * as api from '../../api';

import '../common.scss';
import './index.scss';

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
    const job = this.state.job || {};
    if (this.state.loading) {
      return <div className="loader" />;
    }
    const {
      createdAt,
      updatedAt,
      status,
      jobId,
      map,
      reduce,
      url,
      jobName
    } = job;
    return (
      <div className="result__root">
        <div className="body">
          <div className="header">
            <div>
              <div className="jobName">{jobName}</div>
              <div className="subHeader">
                <div className="label">Created On:</div>
                <div className="value">
                  {new Date(createdAt).toLocaleString()}
                </div>
                <div className="label">Last Update:</div>
                <div className="value">
                  {new Date(updatedAt).toLocaleString()}
                </div>
              </div>
              <div>
                Input: <a href={url}>{url}</a>
              </div>
            </div>
            <div className="status">
              <div>Status:</div>
              <div className="value">{status ? status.toUpperCase() : ''}</div>
            </div>
          </div>
          <div className="function">
            <div className="function_name">Map:</div>
            <AceEditor
              name="map-function"
              readOnly
              value={map}
              {...aceOptions}
            />
          </div>
          <div className="function">
            <div className="function_name">Reduce:</div>
            <AceEditor
              name="reduce-function"
              readOnly
              value={reduce}
              {...aceOptions}
            />
          </div>
        </div>
      </div>
    );
  }
}
