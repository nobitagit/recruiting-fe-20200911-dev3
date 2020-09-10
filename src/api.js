import axios from 'axios';

const service = axios.create({
  baseURL: 'api',
});

const errHandler = err => {
  if (err.response && err.response.data) {
    throw err.response.data.message;
  }
  throw err;
};

const fetchLoanMessages = () => {
  return service
    .get('/inbox/loans')
    .then(res => res.data)
    .catch(errHandler);
};

const fetchTillMessages = () => {
  return service
    .get('/inbox/till')
    .then(res => res.data)
    .catch(errHandler);
};

export default {
  service: service,

  async fetchInboxMessages() {
    const { data: loanMessages } = await fetchLoanMessages();
    const { data: tillMessages } = await fetchTillMessages();
    return [...loanMessages, ...tillMessages];
  },
};
