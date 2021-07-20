import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/css/selects.min.css';

/**
 *
 * @visibleName SelectWrapper
 */
const SelectWrapper = ({
  className,
  hint,
  selectId,
  label,
  message,
  messageType,
  required,
  children,
  ...remainingProps
}) => {
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
        <label
          className="fr-label"
          htmlFor={selectId}
          aria-describedby={messageId}
        >
          {label}
          {required && <span className="error"> *</span>}
          {hint && <span className="fr-hint-text" id={`${selectId}-desc-hint`}>{hint}</span>}
        </label>
      )
      }
      {children}
      {(message && messageType) && <p id={messageId} className={`fr-${messageType}-text`}>{message}</p>}
    </div>
  );
};

SelectWrapper.defaultProps = {
  className: '',
  hint: '',
  label: '',
  message: '',
  messageType: undefined,
  required: false,
};

SelectWrapper.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  hint: PropTypes.string,
  selectId: PropTypes.string.isRequired,
  label: PropTypes.string,
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid']),
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default SelectWrapper;
