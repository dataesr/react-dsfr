import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import './radios.css';

/**
 *
 * @visibleName Radio
 */
const Radio = (props) => {
  const {
    className,
    hint,
    id,
    label,
    message,
    messageType,
    onChange,
    size,
    value,
  } = props;

  const messageClasses = (messageType !== '') ? `fr-radio-group--${messageType}` : null;
  const sizeClass = (size !== 'md') ? 'fr-radio-group--sm' : null;
  const inputClasses = classNames('fr-radio-group', className, messageClasses, sizeClass);
  const radioId = id || uuidv4();
  const messageId = uuidv4();

  return (
    <div
      className={inputClasses}
      data-testid="radio"
    >
      <input
        type="radio"
        id={radioId}
        name="radio"
        onChange={onChange}
        value={value}
      />
      <label className="fr-label" htmlFor={radioId}>{label}</label>
      {hint && <span className="fr-hint-text">{hint}</span>}
      {(message && messageType) && <p id={messageId} className={`fr-${messageType}-text`}>{message}</p>}
    </div>
  );
};

Radio.defaultProps = {
  className: '',
  hint: '',
  id: null,
  size: 'md',
  onChange: () => {},
  messageType: '',
  message: '',
};

Radio.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  id: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string.isRequired,
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid', '']),
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md']),
  value: PropTypes.string.isRequired,
};

export default Radio;
