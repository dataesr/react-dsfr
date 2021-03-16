import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import { CLASS_NAME_TYPE } from '../../../utils/variables';

/**
 *
 * @visibleName Radio
 */
const Radio = forwardRef((props, ref) => {
  const {
    className,
    hint,
    id,
    label,
    message,
    messageType,
    onChange,
    size,
    value,
  } = props;

  const messageClasses = (messageType !== '') ? `rf-radio-group--${messageType}` : null;
  const sizeClass = (size !== 'md') ? 'rf-radio-group--sm' : null;
  const inputClasses = classNames('rf-radio-group', className, messageClasses, sizeClass);
  const radioId = id || uuidv4();
  const messageId = uuidv4();

  return (
    <div className={inputClasses}>
      <input
        data-testid="radio-testid"
        type="radio"
        id={radioId}
        name="radio"
        onChange={onChange}
        ref={ref}
        value={value}
      />
      <label className="rf-label" htmlFor={radioId}>{label}</label>
      {hint && <span className="rf-hint-text">{hint}</span>}
      {(message && messageType) && <p id={messageId} className={`rf-${messageType}-text`}>{message}</p>}
    </div>
  );
});

Radio.defaultProps = {
  className: '',
  hint: '',
  id: null,
  size: 'md',
  onChange: () => {},
  messageType: '',
  message: '',
};

Radio.propTypes = {
  className: CLASS_NAME_TYPE,
  id: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.string.isRequired,
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid', '']),
  onChange: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md']),
  value: PropTypes.string.isRequired,
};

export default Radio;
