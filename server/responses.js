const loans = [
  {
    type: 'loan',
    action: 'review',
    amount: 300000,
    member: 'Anthony Martial',
    info: {
      dates: {
        timestamp: '2018-05-16T09:30:24.022Z',
      },
    },
  },
  {
    type: 'loan',
    action: 'review',
    amount: 2000,
    member: 'Cynthia Wandia',
    info: {
      dates: {
        timestamp: '2018-05-16T09:30:24.022Z',
      },
    },
  },
  {
    type: 'loan',
    action: 'review',
    amount: 10000,
    member: 'Agatha Cristie',
    info: {
      dates: {
        timestamp: '2018-05-16T09:30:24.022Z',
      },
    },
  },
];

const till = [
  {
    type: 'topup-request',
    action: 'review',
    amount: 3000,
    user: 'John Myers',
    info: {
      dates: {
        timestamp: '2019-05-13T09:30:24.022Z',
      },
    },
  },
  {
    type: 'withdrawal-request',
    action: 'review',
    amount: 25000,
    user: 'Mary Summers',
    info: {
      dates: {
        timestamp: '2019-05-16T09:30:24.022Z',
      },
    },
  },
  {
    type: 'topup-request',
    action: 'review',
    amount: 25000,
    user: 'Mary Summers',
    info: {
      dates: {
        timestamp: '2019-05-16T09:30:24.022Z',
      },
    },
  },
];

module.exports = { loans, till };
