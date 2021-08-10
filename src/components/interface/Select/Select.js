import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

import SelectWrapper from './SelectWrapper';

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
  const selectId = useRef(id || uuidv4());

  useEffect(() => {
    selectId.current = id || uuidv4();
  }, [id]);

  return (
    <SelectWrapper
      className={className}
      hint={hint}
      selectId={selectId.current}
      label={label}
      message={message}
      messageType={messageType}
      required={required}
      {...remainingProps}
    >
      <select
        className={_className}
        disabled={disabled}
        id={selectId.current}
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
              key={`${selectId.current}-${opt.value}`}
              value={opt.value}
            >
              {opt.label}
            </option>
          ))
        }
      </select>
    </SelectWrapper>
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
  selected: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  required: PropTypes.bool,
};

export default Select;
