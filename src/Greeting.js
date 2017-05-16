import React from 'react';
import PropTypes from 'prop-types';

const Greeting = props => (
  <div>
    Good morning, {props.name}
  </div>
);

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Greeting;
