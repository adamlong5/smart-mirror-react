import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SpeechBubble = props => (
  <div className={`speech ${props.type}`}>
    {props.children}
  </div>
);

const StreamDialog = props => (
  <div className="dialog">
    <SpeechBubble type="intent">{props.intent === "FairestOfThemAll" ? "Who is the fairest of them all?" : `Tell me more about the ${props.intent.toLowerCase()}`}....</SpeechBubble>
    <SpeechBubble type="response">{props.response}</SpeechBubble>
  </div>
);

class StreamDialogWrapper extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log(this.streamDialog)
    this.streamDialog.scrollIntoView({block: 'end', behavior: 'smooth'});
  }

  render() {
    return (
      <div className="dialog" ref={(c) => { this.streamDialog = c; }}>
        <SpeechBubble type="intent">{this.props.intent === "FairestOfThemAll" ? "Who is the fairest of them all?" : `Tell me more about ${this.props.intent}`}....</SpeechBubble>
        <SpeechBubble type="response">{this.props.response}</SpeechBubble>
      </div>
    )
  }
}

StreamDialog.propTypes = {
  intent: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired,
};

export default StreamDialogWrapper;
