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

export default {
  service: service,

  fetchInboxMessages() {
    return service
      .get('/inbox/loans')
      .then(res => res.data)
      .catch(errHandler);
  },
};
