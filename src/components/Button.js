import React from 'react';
import PropTypes from 'prop-types';
import '@gouvfr/buttons/dist/css/buttons.min.css';

const Button = (props) => {
  return (
    <button className="rf-btn">
      {props.text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};