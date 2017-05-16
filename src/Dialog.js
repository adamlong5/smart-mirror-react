import React, { Component } from 'react';
import PropTypes from 'prop-types';


class SpeechBubble extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.bubble.scrollIntoView()
  }

  render( ) {
    return (
      <div ref={(d) => {this.bubble = d;}} className={`speech ${this.props.type}`}>
        {this.props.children}
      </div>
    )
  }
}


const StreamDialog = props => (
  <div className="dialog">
    <SpeechBubble type="intent">{props.intent === "FairestOfThemAll" ? "Who is the fairest of them all?" : `Tell me more about the ${props.intent.toLowerCase()}`}....</SpeechBubble>
    <SpeechBubble type="response">{props.response}</SpeechBubble>
  </div>
);

class StreamDialogWrapper extends Component {
  constructor() {
    super()
    this.state = {
      showSecondBubble: false,
    }
  }

  componentDidMount() {
    // this.streamDialog.scrollIntoView({block: 'end', behavior: 'smooth'});
    setTimeout(() => {
      this.setState({ showSecondBubble: true });
    }, 500);
  }

  render() {
    return (
      <div className="dialog" ref={(c) => { this.streamDialog = c; }}>
        <SpeechBubble type="intent">{this.props.intent === "FairestOfThemAll" ? "Who is the fairest of them all?" : `Tell me more about ${this.props.intent}`}....</SpeechBubble>
        {this.state.showSecondBubble && <SpeechBubble type="response">{this.props.response}</SpeechBubble>}
      </div>
    )
  }
}

StreamDialog.propTypes = {
  intent: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired,
};

export default StreamDialogWrapper;
