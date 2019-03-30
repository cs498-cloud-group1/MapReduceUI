import axios from 'axios';
import isObject from 'lodash/isObject';

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
  return axios.post(url).then(response => {
    const data = response.data;
    if (isObject(data)) {
      return data;
    } else {
      return data.find(job => job.jobId === jobId);
    }
  });
}
