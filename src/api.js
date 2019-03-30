import axios from 'axios';
import isArray from 'lodash/isArray';

const jobsUrl =
  'https://npbtinvj6l.execute-api.us-east-1.amazonaws.com/dev/jobs';

export function createJob(formVals) {
  return axios.post(jobsUrl, formVals).then(response => response.data);
}

export function getJobs() {
  return axios.get(jobsUrl).then(response => response.data);
}

export function getJob(jobId) {
  const url = jobsUrl; // + '/' + jobId;
  return axios.get(url).then(response => {
    const data = response.data;
    if (isArray(data)) {
      return data.find(job => job.jobId === jobId);
    } else {
      return data;
    }
  });
}
