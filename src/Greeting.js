import React from 'react';
import PropTypes from 'prop-types';

const Greeting = props => (
  <div className="greeting">
    Good morning, {props.name}
  </div>
);

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
