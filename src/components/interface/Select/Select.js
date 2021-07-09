import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/css/selects.min.css';

/**
 *
 * @visibleName Select
 */
const Select = ({
  className,
  disabled,
  hint,
  id,
  label,
  message,
  messageType,
  name,
  onChange,
  options,
  selected,
  required,
  ...remainingProps
}) => {
  const _className = classNames('fr-select', {
    [`fr-select--${messageType}`]: messageType,
  });
  const selectId = id || uuidv4();
  const [messageId] = useState(uuidv4());
  const _classNameWrapper = classNames('fr-select-group', {
    [`fr-select-group--${messageType}`]: messageType,
  }, className);

  return (
    <div
      className={_classNameWrapper}
      {...dataAttributes(remainingProps)}
    >
      {
      label && (
        <label className="fr-label" htmlFor={selectId} aria-describedby={messageId}>
          {label}
          {required && <span className="error"> *</span>}
          {hint && <span className="fr-hint-text" id={`${selectId}-desc-hint`}>{hint}</span>}
        </label>
      )
      }
      <select
        className={_className}
        disabled={disabled}
        id={selectId}
        name={name}
        onChange={onChange}
        value={selected}
        data-testid="select"
      >
        {
          options.map((opt) => (
            <option
              disabled={opt.disabled || false}
              hidden={opt.hidden || false}
              key={`${selectId}-${uuidv4()}`}
              value={opt.value}
            >
              {opt.label}
            </option>
          ))
        }
      </select>
      {(message && messageType) && <p id={messageId} className={`fr-${messageType}-text`}>{message}</p>}
    </div>
  );
};

Select.defaultProps = {
  className: '',
  disabled: false,
  hint: '',
  id: null,
  label: '',
  message: '',
  messageType: undefined,
  name: null,
  onChange: () => {},
  selected: '',
  required: false,
};

Select.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  disabled: PropTypes.bool,
  hint: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid']),
  name: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
  })).isRequired,
  selected: PropTypes.string,
  required: PropTypes.bool,
};

export default Select;
