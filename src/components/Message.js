import React, { Component } from 'react';
import '../Inbox.css';
import moment from 'moment'

class Message extends Component {
  
  calculateTimeSince = (date) => {
    let then = moment(date)
    let now = moment()
    if (now.diff(then, 'minutes') < 60) return now.diff(then, 'minutes') + "m ago"
    if (now.diff(then, 'hours') < 24) return now.diff(then, 'hours') + "h ago"
    return now.diff(then, 'days') + "d ago"
  }

  render() {
    const messages = this.props.messages

    if (!messages) {
      return (
        <div className="Message">
          <h4>Loading messages...</h4>
        </div>
      )
    }

    if (messages.length === 0) {
      return (
        <div className="Message">
          <h4>No new messages.</h4>
        </div>
      )
    }

    const message = messages[this.props.indexActiveMessage]
    const { type, amount, member, info: {dates: {timestamp}} } = message

    return (
      <div className="Message">
        <div className="inbox-row grey-text">
          <span>{this.props.indexActiveMessage + 1} of {messages.length}</span>
          <span>{this.calculateTimeSince(timestamp)}</span>
        </div>
        <h2>{member} applied for a {type} with a total amount of KES {amount.toLocaleString()}</h2>
      </div>
    );
  }
}

export default Message;
