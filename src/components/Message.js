import React from 'react';
import moment from 'moment';
import InfoTextLoan from './InfoTextLoan';
import InfoTextTill from './InfoTextTill';
import '../Inbox.css';

const Message = ({ messages, indexActiveMessage }) => {
  const calculateTimeSince = date => {
    let then = moment(date);
    let now = moment();
    if (now.diff(then, 'minutes') < 60)
      return now.diff(then, 'minutes') + 'm ago';
    if (now.diff(then, 'hours') < 24) return now.diff(then, 'hours') + 'h ago';
    return now.diff(then, 'days') + 'd ago';
  };

  if (!messages) {
    return (
      <div className="Message">
        <h4>Loading messages...</h4>
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="Message">
        <h4>No new messages.</h4>
      </div>
    );
  }

  const message = messages[indexActiveMessage];
  const {
    type,
    info: {
      dates: { timestamp },
    },
  } = message;

  let infoText;
  switch (type) {
    case 'loan':
      infoText = <InfoTextLoan message={message} />;
      break;
    case 'topup-request':
      infoText = <InfoTextTill message={message} />;
      break;
    case 'withdrawal-request':
      infoText = <InfoTextTill message={message} />;
      break;
    default:
      infoText = null;
  }

  return (
    <div className="Message">
      <div className="inbox-row grey-text">
        <span>
          {indexActiveMessage + 1} of {messages.length}
        </span>
        <span>{calculateTimeSince(timestamp)}</span>
      </div>
      {infoText}
    </div>
  );
};

export default Message;
