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
  isDisabled,
  isInline,
  legend,
  message,
  messageType,
  ariaLabel,
  name,
  ...remainingProps
}) => {
  const [radioName, setRadioName] = useState(name || uuidv4());

  useEffect(() => {
    setRadioName(name || uuidv4());
  }, [name]);

  const childs = Children.toArray(children).map((child) => cloneElement(child, {
    name: child.props.name || radioName,
  }));
  const inlineClass = (isInline) ? 'fr-fieldset--inline' : null;
  const messageClasses = (messageType !== '') ? `fr-fieldset--${messageType}` : null;
  const _className = classNames('fr-form-group', className, inlineClass, messageClasses);
  return (
    <div
      className={_className}
      {...dataAttributes(remainingProps)}
    >
      <fieldset
        className="fr-fieldset"
        aria-label={ariaLabel || legend}
        disabled={isDisabled}
      >
        {legend && <legend className="fr-fieldset__legend">{legend}</legend>}
        {hint && <p className="fr-hint-text">{hint}</p>}
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
  isDisabled: false,
  isInline: false,
  messageType: '',
  message: '',
  ariaLabel: '',
  name: undefined,
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
  hint: PropTypes.string,
  ariaLabel: PropTypes.string,
  isDisabled: PropTypes.bool,
  isInline: PropTypes.bool,
  legend: PropTypes.string.isRequired,
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid', '']),
  name: PropTypes.string,
};

export default RadioGroup;
