import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

import SelectWrapper from './SelectWrapper';
import dataAttributes from '../../../utils/data-attributes';

/**
 *
 * @visibleName Select
 */
const Select = ({
  disabled,
  id,
  messageType,
  onChange,
  options,
  selected,
  ...remainingProps
}) => {
  const _className = classNames('fr-select', {
    [`fr-select--${messageType}`]: messageType,
  });
  const selectId = useRef(id || uuidv4());

  const handleChange = (event) => {
    onChange(event);
  };

  useEffect(() => {
    selectId.current = id || uuidv4();
  }, [id]);

  return (
    <SelectWrapper
      disabled={disabled}
      messageType={messageType}
      selectId={selectId.current}
      {...remainingProps}
    >
      <select
        {...dataAttributes.filterAll(remainingProps)}
        className={_className}
        disabled={disabled}
        id={selectId.current}
        onChange={handleChange}
        value={selected}
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
  disabled: false,
  id: null,
  messageType: undefined,
  selected: '',
};

Select.propTypes = {
  ...SelectWrapper.PropTypes,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid']),
  options: PropTypes.arrayOf(PropTypes.shape({
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  selected: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Select;
