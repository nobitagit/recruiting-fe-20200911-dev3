import React, { Component } from 'react';
import api from '../api';
import Inbox from '../components/Inbox';

class BaseView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: null,
    };
  }

  componentDidMount() {
    api
      .fetchInboxMessages()
      .then(res => {
        this.setState({ messages: res });
      })
      .catch(err => console.log('DEBUG Error at fetchInboxMessage', err));
  }

  componentDidUpdate(prevProps) {
    console.log(this.messages);
  }

  render() {
    return <Inbox messages={this.state.messages} />;
  }
}

export default BaseView;
