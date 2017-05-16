import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StreamDialog from './Dialog';

class Stream extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responses: [{ intent: props.intent, response: props.response }],
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      const updatedResponses = this.state.responses.slice();
      const { intent, response } = nextProps;
      updatedResponses.push({ intent, response });
      this.setState({ responses: updatedResponses });
    }
  }

  render() {
    return this.state.responses.length === 0 ? null :
      <div className="stream">
        {this.state.responses.map((response, i) => <StreamDialog key={response.response + i} {...response} />)}
      </div>
  }
}

Stream.propTypes = {
  intent: PropTypes.string,
  response: PropTypes.string,
};

export default Stream;
