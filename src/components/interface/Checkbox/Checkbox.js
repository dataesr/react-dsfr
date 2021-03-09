import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { CLASS_NAME_TYPE } from '../../../utils/variables';

/**
 *
 * @visibleName Checkbox
 */
const Checkbox = forwardRef((props, ref) => {
  const {
    className,
    hint,
    id,
    isDisabled,
    label,
    message,
    messageType,
    onChange,
    size,
    value,
  } = props;

  const messageClasses = (messageType !== '') ? `rf-checkbox-group--${messageType}` : null;
  const sizeClass = (size !== 'md') ? 'rf-checkbox-group--sm' : null;
  const inputClasses = classNames('rf-checkbox-group', className, messageClasses, sizeClass);
  const messageId = uuidv4();

  return (
    <div className={inputClasses}>
      <input
        data-testid="checkbox-testid"
        type="checkbox"
        id={id}
        name="checkbox"
        onChange={onChange}
        ref={ref}
        value={value}
        disabled={isDisabled}
      />
      <label className="rf-label" htmlFor={id}>{label}</label>
      {hint && <span className="rf-hint-text">{hint}</span>}
      {(message && messageType) && <p id={messageId} className={`rf-${messageType}-text`}>{message}</p>}
    </div>
  );
});

Checkbox.defaultProps = {
  className: '',
  hint: '',
  id: null,
  isDisabled: false,
  size: 'md',
  onChange: () => {},
  messageType: '',
  message: '',
};

Checkbox.propTypes = {
  className: CLASS_NAME_TYPE,
  id: PropTypes.string,
  hint: PropTypes.string,
  isDisabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid', '']),
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md']),
  value: PropTypes.string.isRequired,
};

export default Checkbox;
