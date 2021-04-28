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
    isExtended,
    label,
    message,
    messageType,
    onChange,
    size,
    imageURL,
    value,
  } = props;

  const messageClasses = (messageType !== '') ? `fr-radio-group--${messageType}` : null;
  const extendedClasses = (isExtended) ? 'fr-radio-rich' : null;
  const sizeClass = (size !== 'md') ? 'fr-radio-group--sm' : null;
  const _className = classNames('fr-radio-group', extendedClasses, className, messageClasses, sizeClass);
  const _labelClassName = classNames('fr-label', { 'fr-ifi-no-icon': isExtended });
  const radioId = id || uuidv4();
  const messageId = uuidv4();

  return (
    <div
      className={_className}
      data-testid="radio"
    >
      <input
        type="radio"
        id={radioId}
        name="radio"
        onChange={onChange}
        value={value}
      />
      <label
        className={_labelClassName}
        htmlFor={radioId}
        style={(imageURL && { backgroundImage: `url(${imageURL})` }) || undefined}
      >
        {label}
      </label>
      {hint && <span className="fr-hint-text">{hint}</span>}
      {(message && messageType) && <p id={messageId} className={`fr-${messageType}-text`}>{message}</p>}
    </div>
  );
};

Radio.defaultProps = {
  className: '',
  hint: '',
  id: '',
  isExtended: false,
  size: 'md',
  onChange: () => {},
  messageType: '',
  message: '',
  imageURL: '',
};

Radio.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  hint: PropTypes.string,
  id: PropTypes.string,
  isExtended: PropTypes.bool,
  label: PropTypes.string.isRequired,
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid', '']),
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md']),
  imageURL: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default Radio;
