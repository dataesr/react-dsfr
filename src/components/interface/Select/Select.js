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
  id,
  messageType,
  options,
  selected,
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
      selectId={selectId.current}
      messageType={messageType}
      {...remainingProps}
    >
      <select
        {...dataAttributes.filterAll(remainingProps)}
        className={_className}
        id={selectId.current}
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
  id: null,
  messageType: undefined,
  selected: '',
};

Select.propTypes = {
  ...SelectWrapper.PropTypes,
  id: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid']),
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
  })).isRequired,
  selected: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

export default Select;
