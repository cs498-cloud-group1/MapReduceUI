import axios from 'axios';

const jobsUrl =
  'https://npbtinvj6l.execute-api.us-east-1.amazonaws.com/dev/jobs';

export function createJob(formVals) {
  return axios.post(jobsUrl, formVals).then(response => response.data);
}
