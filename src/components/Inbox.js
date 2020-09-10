import React, { Component } from 'react';
import api from '../api'
import '../Inbox.css';
import Message from './Message';
import ActionButton from './ActionButton';

class Inbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: null,
      indexActiveMessage: 0
    }
  }

  nextMessage = (e) => {
    e.preventDefault()
    this.setState({
      indexActiveMessage: (this.state.indexActiveMessage + 1) % this.state.messages.length
    })
  }

  previousMessage = (e) => {
    e.preventDefault()
    const numberOfMessages = this.state.messages.length
    this.setState({
      //To make modulo operator works properly in case of negative number i.e. so that -1 % 3 = 2. 
      indexActiveMessage: ((((this.state.indexActiveMessage - 1) % numberOfMessages) + numberOfMessages) % numberOfMessages) 
    })
  }
 
  componentDidMount() {
    api.fetchInboxMessages()
      .then(res => {this.setState({messages: res.data})})
      .catch(err => console.log("DEBUG Error at fetchInboxMessage", err))
  }

  render() {
  
    return (
      <div className="Inbox">
        <div className="inbox-row">        
          <span className="title">Inbox</span>
          <div className="inbox-buttons">
            <button onClick={this.previousMessage}>
              <img src="assets/left_arrow.svg" alt="left-arrow"></img>
            </button>
            <button onClick={this.nextMessage}>
              <img src="assets/right_arrow.svg" alt="right-arrow"></img>
            </button>
          </div>
        </div>

        <Message 
          messages={this.state.messages}
          indexActiveMessage={this.state.indexActiveMessage}
        />

        <ActionButton
          messages={this.state.messages}
          indexActiveMessage={this.state.indexActiveMessage}
        />
      
      </div>
    );
  }
}

export default Inbox;
