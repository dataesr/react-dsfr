import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

import SelectWrapper from './SelectWrapper';
import './searcheableSelect.css';

/**
 *
 * @visibleName SearcheableSelect
 */
const SearcheableSelect = ({
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
  filter,
  ...remainingProps
}) => {
  const [selectId] = useState(id || uuidv4());

  const _className = classNames('fr-select', {
    [`fr-select--${messageType}`]: messageType,
  });

  const [internalValue, setInternalValue] = useState(selected);
  const [showOptions, setShowOptions] = useState(false);

  const filteredOptions = options
    .filter((option, index, arr) => filter(internalValue, option, index, arr));

  const onInternalChange = (value, newValue) => {
    setInternalValue(newValue);
    onChange(value);
  };

  const onFocus = () => {
    onInternalChange('', '');
    setShowOptions(true);
  };

  const onBlur = () => {
    if (filteredOptions.length === 1) {
      onInternalChange(filteredOptions[0].value, filteredOptions[0].label);
    } else {
      const foundValue = options.find((option) => option.label === internalValue);
      if (!foundValue) {
        setInternalValue('');
      }
    }
    setShowOptions(false);
  };

  return (
    <SelectWrapper
      className={className}
      hint={hint}
      selectId={selectId}
      label={label}
      message={message}
      messageType={messageType}
      required={required}
      {...remainingProps}
    >
      <input
        id={selectId}
        className={_className}
        autoComplete="off"
        required={required}
        disabled={disabled}
        onChange={(e) => setInternalValue(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        value={internalValue}
      />
      <div
        className={classNames(
          'select-search-options',
          'midlength-input',
          { 'select-search-options__visible': showOptions },
        )}
      >
        {filteredOptions.length === 0 ? (
          <div className="select-search-option__disabled">
            Aucun résultat
          </div>
        ) : (
          <>
            {filteredOptions.map((option) => (
              <option
                className="select-search-option"
                disabled={option.disabled || false}
                hidden={option.hidden || false}
                key={`${selectId}-${option.value}`}
                value={option.value}
                onMouseDown={() => onInternalChange(option.value, option.label)}
              >
                {option.label}
              </option>
            ))}
          </>
        )}
      </div>
    </SelectWrapper>
  );
};

SearcheableSelect.defaultProps = {
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
  filter: (
    internalValue,
    option,
  ) => option.label.toLowerCase().includes(internalValue.toLowerCase()),
};

SearcheableSelect.propTypes = {
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
  filter: PropTypes.func,
};

export default SearcheableSelect;
