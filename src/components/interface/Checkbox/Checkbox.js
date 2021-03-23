import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';

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
  const _className = classNames('rf-checkbox-group', {
    [`rf-checkbox-group--${messageType}`]: messageType,
    'rf-checkbox-group--sm': (size !== 'md'),
  }, className);
  const checkboxId = id || uuidv4();
  const messageId = uuidv4();

  return (
    <div className={_className}>
      <input
        data-testid="checkbox-testid"
        type="checkbox"
        id={checkboxId}
        name="checkbox"
        onChange={onChange}
        ref={ref}
        value={value}
        disabled={isDisabled}
      />
      <label className="rf-label" htmlFor={checkboxId}>{label}</label>
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
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
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
