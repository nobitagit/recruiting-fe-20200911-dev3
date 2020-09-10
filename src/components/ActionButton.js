import React, { Component } from 'react';
import '../Inbox.css';

class ActionButton extends Component {

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  render() {
    const messages = this.props.messages

    if (!messages) {
      return (
        <div className="ActionButton">
        </div>
      )
    }

    if (messages.length === 0) {
      return (
        <div className="ActionButton">
        </div>
      )
    }

    const message = messages[this.props.indexActiveMessage]
    const { type, action } = message

    return (
      <div className="ActionButton">
        <button 
          className="action-button">
            {this.capitalizeFirstLetter(action)} {this.capitalizeFirstLetter(type)} 
        </button>
      </div>
    );
  }
}

export default ActionButton;