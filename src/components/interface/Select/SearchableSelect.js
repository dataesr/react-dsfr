import React, {
  createRef, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';

import SelectWrapper from './SelectWrapper';
import './searchableSelect.css';
import dataAttributes from '../../../utils/data-attributes';

/**
 *
 * @visibleName SearchableSelect
 */
const SearchableSelect = ({
  id,
  messageType,
  options,
  selected,
  filter,
  onChange,
  onTextChange,
  onBlur,
  onFocus,
  onKeyDown,
  ...remainingProps
}) => {
  const selectId = useRef(id || uuidv4());
  const optionsRef = useRef([]);
  const optionsContainerRef = useRef();
  const [arrowSelected, setArrowSelected] = useState();
  const [internalLabel, setInternalLabel] = useState('');
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
    if (selected) {
      const selectedOption = options.find((option) => option.value === selected);
      setInternalLabel(selectedOption ? selectedOption.label : '');
    } else {
      setInternalLabel('');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  useEffect(() => {
    if (selected) {
      const selectedOption = options.find((option) => option.value === selected);
      setInternalLabel(selectedOption ? selectedOption.label : '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

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

  const onTextInternalChange = (value) => {
    onTextChange(value);
    setInternalLabel(value);
  };

  const onInternalChange = (newValue, newLabel) => {
    onTextInternalChange(newLabel);
    onChange(newValue);
  };

  const onInternalFocus = (e) => {
    onInternalChange('', '');
    setShowOptions(true);
    setArrowSelected(null);
    onFocus(e);
  };

  const onInternalBlur = (e) => {
    if (filteredOptions.length === 1) {
      onInternalChange(filteredOptions[0].value, filteredOptions[0].label);
    } else {
      const foundValue = options.find((option) => option.label === internalLabel);
      if (!foundValue) {
        onTextInternalChange('');
      }
    }
    setShowOptions(false);
    onBlur(e);
  };

  const onInternalKeyDown = (e) => {
    onKeyDown(e);
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
      selectId={selectId.current}
      messageType={messageType}
      {...remainingProps}
    >
      <div className="select-search-input">
        <input
          {...dataAttributes.filterAll(remainingProps)}
          id={selectId.current}
          className={_className}
          autoComplete="off"
          onChange={(e) => onTextInternalChange(e.target.value)}
          onFocus={onInternalFocus}
          onBlur={onInternalBlur}
          onKeyDown={onInternalKeyDown}
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
  onTextChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
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
  hint: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  id: PropTypes.string,
  label: PropTypes.string,
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid']),
  name: PropTypes.string,
  onChange: PropTypes.func,
  onTextChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
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
