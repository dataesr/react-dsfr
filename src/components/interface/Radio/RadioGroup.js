import React, {
  useEffect, useState, Children, cloneElement,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

import dataAttributes from '../../../utils/data-attributes';

/**
 *
 * @visibleName RadioGroup
 */
const RadioGroup = ({
  children,
  className,
  hint,
  disabled,
  isInline,
  legend,
  message,
  messageType,
  ariaLabel,
  name,
  value,
  onChange,
  required,
  ...remainingProps
}) => {
  const [radioName, setRadioName] = useState(name || uuidv4());
  const [internalValue, setInternalValue] = useState('');

  useEffect(() => {
    setRadioName(name || uuidv4());
  }, [name]);

  const onGroupChange = (newValue, event) => {
    onChange(newValue, event);
    if (!value) {
      setInternalValue(newValue);
    }
  };

  const childs = Children.toArray(children).map((child) => {
    const { value: childValue } = child.props;
    const defaultChecked = value ? childValue === value : childValue === internalValue;

    return cloneElement(child, {
      name: child.props.name || radioName,
      defaultChecked: child.props.defaultChecked || defaultChecked,
      required,
      onGroupChange,
    });
  });
  const inlineClass = (isInline) ? 'fr-fieldset--inline' : null;
  const messageClasses = (messageType !== '') ? `fr-fieldset--${messageType}` : null;
  const _className = classNames('fr-form-group', className, inlineClass, messageClasses);
  return (
    <div
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      <fieldset
        className="fr-fieldset"
        aria-label={ariaLabel || legend}
        disabled={disabled}
      >
        {legend && (
        <legend className="fr-fieldset__legend fr-text--regular">
          {legend}
          {required && <span className="error"> *</span>}
          {hint && <p className="fr-hint-text">{hint}</p>}
        </legend>
        )}
        <div className="fr-fieldset__content">
          {childs}
        </div>
        {(message && messageType) && <p className={`fr-${messageType}-text`}>{message}</p>}
      </fieldset>
    </div>
  );
};

RadioGroup.defaultProps = {
  children: '',
  className: '',
  hint: '',
  disabled: false,
  isInline: false,
  messageType: '',
  message: '',
  ariaLabel: '',
  name: undefined,
  value: '',
  onChange: () => {},
  required: false,
};

RadioGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  hint: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  ariaLabel: PropTypes.string,
  disabled: PropTypes.bool,
  isInline: PropTypes.bool,
  legend: PropTypes.string.isRequired,
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid', '']),
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export default RadioGroup;
