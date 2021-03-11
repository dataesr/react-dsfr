/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import { CLASS_NAME_TYPE } from '../../../utils/variables';

/**
 *
 * @visibleName Select
 */
const Select = ({
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
}) => {
  const selectClasses = classNames(
    'rf-select',
    className,
    { [`rf-select--${messageType}`]: messageType },
  );
  const selectId = id || uuidv4();
  const messageId = uuidv4();
  const divClasses = classNames(
    'rf-select-group',
    { [`rf-select-group--${messageType}`]: messageType },
  );

  return (
    <div className={divClasses}>
      {
      label && (
        <label className="rf-label" htmlFor={selectId} aria-describedby={messageId}>
          {label}
          {hint && <span className="rf-hint-text" id={`${selectId}-desc-hint`}>{hint}</span>}
        </label>
      )
      }
      <select
        className={selectClasses}
        data-testid="select"
        disabled={disabled}
        id={selectId}
        name={name}
        onChange={onChange}
        value={selected}
      >
        {
          options.map((opt, i) => (
            <option
              disabled={opt.disabled || false}
              hidden={opt.hidden || false}
              key={`${selectId}-${i}`}
              value={opt.value}
            >
              {opt.label}
            </option>
          ))
        }
      </select>
      {(message && messageType) && <p id={messageId} className={`rf-${messageType}-text`}>{message}</p>}
    </div>
  );
};

Select.defaultProps = {
  className: '',
  disabled: false,
  hint: '',
  id: null,
  label: '',
  message: '',
  messageType: '',
  name: null,
  onChange: () => {},
  selected: '',
};

Select.propTypes = {
  className: CLASS_NAME_TYPE,
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
};

export default Select;
