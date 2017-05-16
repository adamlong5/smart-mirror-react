import React, { Component } from 'react';
import PropTypes from 'prop-types';

const SpeechBubble = props => (
  <div className={`speech ${props.type}`}>
    {props.children}
  </div>
);

const StreamDialog = props => (
  <div className="dialog">
    <SpeechBubble type="intent">{props.intent === "FairestOfThemAll" ? "Who is the fairest of them all?" : `Tell me more about ${props.intent}`}....</SpeechBubble>
    <SpeechBubble type="response">{props.response}</SpeechBubble>
  </div>
);

StreamDialog.propTypes = {
  intent: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired,
};

export default StreamDialog;
