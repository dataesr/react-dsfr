import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

/*
* DSFR v1.3.1
*/
import '@gouvfr/dsfr/dist/component/select/select.css';

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
  const hintId = useRef(uuidv4());
  const _classNameWrapper = classNames('fr-select-group', {
    [`fr-select-group--${messageType}`]: messageType,
  }, className);

  return (
    <div
      className={_classNameWrapper}
      {...dataAttributes.getAll(remainingProps)}
    >
      {
      label && (
        <label
          className="fr-label"
          htmlFor={selectId}
          aria-describedby={hint && hintId.current}
        >
          {label}
          {required && <span className="error"> *</span>}
          {hint && <p id={hintId.current} className="fr-hint-text">{hint}</p>}
        </label>
      )
      }
      {children}
      {(message && messageType) && <p className={`fr-${messageType}-text`}>{message}</p>}
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
  hint: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  selectId: PropTypes.string.isRequired,
  label: PropTypes.string,
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid']),
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default SelectWrapper;
