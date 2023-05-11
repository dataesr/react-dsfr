import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/component/radio/radio.css';

/**
 *
 * @visibleName Radio
 */
const Radio = ({
  className,
  hint,
  id,
  isExtended,
  label,
  message,
  messageType,
  disabled,
  onChange,
  onGroupChange,
  size,
  imageURL,
  value,
  defaultChecked,
  svg,
  ...remainingProps
}) => {
  const radioId = useRef(id || uuidv4());

  useEffect(() => {
    radioId.current = id || uuidv4();
  }, [id]);

  const messageClasses = messageType !== '' ? `fr-radio-group--${messageType}` : null;
  const extendedClasses = isExtended ? 'fr-radio-rich' : null;
  const sizeClass = size !== 'md' ? 'fr-radio-group--sm' : null;
  const _className = classNames(
    'fr-radio-group',
    extendedClasses,
    className,
    messageClasses,
    sizeClass,
  );
  const _labelClassName = classNames('fr-label', {
    'fr-ifi-no-icon': isExtended,
  });

  const handleChange = (event) => {
    onChange(event);
    onGroupChange(value, event);
  };

  return (
    <div className={_className} {...dataAttributes.getAll(remainingProps)}>
      <input
        disabled={disabled || undefined}
        {...dataAttributes.filterAll(remainingProps)}
        type="radio"
        id={radioId.current}
        onChange={handleChange}
        value={value}
        defaultChecked={defaultChecked || undefined}
      />
      <label
        className={_labelClassName}
        htmlFor={radioId.current}
        style={
                    (imageURL && { backgroundImage: `url(${imageURL})` }) || undefined
                }
      >
        {label}
        {hint && <p className="fr-hint-text">{hint}</p>}
      </label>
      {svg && isExtended && (
        <div className="fr-radio-rich__img" data-fr-inject-svg>
            {svg}
        </div>
      )}
      {message && messageType && (
        <p className={`fr-${messageType}-text`}>
          {message}
        </p>
      )}
    </div>
  );
};

Radio.defaultProps = {
  className: '',
  defaultChecked: false,
  disabled: undefined,
  hint: '',
  id: '',
  imageURL: '',
  isExtended: false,
  message: '',
  messageType: '',
  onChange: () => {},
  onGroupChange: () => {},
  size: 'md',
  svg: null,
};

Radio.propTypes = {
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  hint: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  id: PropTypes.string,
  imageURL: PropTypes.string,
  isExtended: PropTypes.bool,
  label: PropTypes.string.isRequired,
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid', '']),
  onChange: PropTypes.func,
  onGroupChange: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md']),
  svg: PropTypes.node,
  value: PropTypes.string.isRequired,
};

export default Radio;
