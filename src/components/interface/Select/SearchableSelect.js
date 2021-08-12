import React, {
  createRef, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

import SelectWrapper from './SelectWrapper';
import './searchableSelect.css';

/**
 *
 * @visibleName SearchableSelect
 */
const SearchableSelect = ({
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
  const selectId = useRef(id || uuidv4());
  const optionsRef = useRef([]);
  const optionsContainerRef = useRef();
  const [arrowSelected, setArrowSelected] = useState();

  const getSelectedLabel = () => {
    if (selected) {
      const selectedOption = options.find((option) => option.value === selected);
      return selectedOption ? selectedOption.label : '';
    }
    return '';
  };

  const [internalLabel, setInternalLabel] = useState(getSelectedLabel());
  const [showOptions, setShowOptions] = useState(false);

  if (options.length !== optionsRef.length) {
    optionsRef.current = Array(options.length)
      .fill()
      .map((option, i) => optionsRef.current[i] || createRef());
  }

  useEffect(() => {
    selectId.current = id || uuidv4();
  }, [id]);

  useEffect(() => {
    if (arrowSelected) {
      optionsContainerRef.current.scrollTop = Math.max(
        0,
        optionsRef.current[arrowSelected].current.offsetTop - 20,
      );
    } else {
      optionsContainerRef.current.scrollTop = 0;
    }
  }, [arrowSelected]);

  const _className = classNames('fr-select', {
    [`fr-select--${messageType}`]: messageType,
  });

  const filteredOptions = options
    .filter((option, index, arr) => filter(internalLabel, option, index, arr));

  const onInternalChange = (newValue, newLabel) => {
    setInternalLabel(newLabel);
    onChange(newValue);
  };

  const onFocus = () => {
    onInternalChange('', '');
    setShowOptions(true);
    setArrowSelected(null);
  };

  const onBlur = () => {
    if (filteredOptions.length === 1) {
      onInternalChange(filteredOptions[0].value, filteredOptions[0].label);
    } else {
      const foundValue = options.find((option) => option.label === internalLabel);
      if (!foundValue) {
        setInternalLabel('');
      }
    }
    setShowOptions(false);
  };

  const onKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setShowOptions(true);
        if (arrowSelected === null) {
          setArrowSelected(0);
        } else if (arrowSelected < filteredOptions.filter((o) => !o.disabled).length - 1) {
          setArrowSelected(arrowSelected + 1);
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        setShowOptions(true);
        if (arrowSelected && arrowSelected > 0) {
          setArrowSelected(arrowSelected - 1);
        }
        break;
      case 'Enter':
        e.preventDefault();
        if (arrowSelected !== null) {
          const option = filteredOptions.filter((o) => !o.disabled)[arrowSelected];
          onInternalChange(option.value, option.label);
          setShowOptions(false);
        }
        break;
      default:
        setArrowSelected(null);
    }
  };

  let refCount = -1;
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
      <div className="select-search-input">
        <input
          onKeyDown={onKeyDown}
          id={selectId.current}
          className={_className}
          autoComplete="off"
          required={required}
          disabled={disabled}
          onChange={(e) => setInternalLabel(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          value={internalLabel}
        />
        <div
          ref={optionsContainerRef}
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
              {filteredOptions.map((option) => {
                if (!option.disabled) {
                  refCount += 1;
                }
                return (
                  <option
                    ref={option.disabled ? null : optionsRef.current[refCount]}
                    className={classNames(
                      'select-search-option',
                      {
                        'select-search-option__selected': !option.disabled && refCount === arrowSelected,
                        'select-search-option__disabled': option.disabled,
                      },
                    )}
                    disabled={option.disabled || false}
                    hidden={option.hidden || false}
                    key={`${selectId}-${option.value}`}
                    value={option.value}
                    onMouseDown={() => onInternalChange(option.value, option.label)}
                  >
                    {option.label}
                  </option>
                );
              })}
            </>
          )}
        </div>
      </div>
    </SelectWrapper>
  );
};

SearchableSelect.defaultProps = {
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
    label,
    option,
  ) => option.label.toLowerCase().includes(label.toLowerCase()),
};

SearchableSelect.propTypes = {
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

export default SearchableSelect;
