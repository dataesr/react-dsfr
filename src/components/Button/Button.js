import React from 'react';
import PropTypes from 'prop-types';
import '@gouvfr/buttons/dist/css/buttons.min.css';

/**
 * The only true button.
 *
 * @visibleName Button
 */
const Button = (props) => {
    return (
        <button className="rf-btn">
            {props.text}
        </button>
    );
};
/** @component */
export default Button;

Button.propTypes = {
    text: PropTypes.string.isRequired,
};