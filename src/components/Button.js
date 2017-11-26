import React from 'react';
import PropTypes from 'prop-types';

export const Button = props => (
  <button onClick={props.handleClick}>{props.text}</button>
);

Button.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func
};
