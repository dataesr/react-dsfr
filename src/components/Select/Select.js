import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
// import '@gouvfr/selects/dist/css/selects.min.css';

/**
 * La liste déroulante permet à un utilisateur de choisir un élément dans une liste donnée.
 *
 * @visibleName Liste déroulante - Select
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
}) => {
  const selectClasses = classNames(
    'rf-select',
    className,
    `${(messageType ? `rf-select--${messageType}` : '')}`,
  );
  const selectId = id || uuidv4();
  const messageId = uuidv4();
  const divClasses = classNames(`${(messageType ? `rf-select-group rf-select-group--${messageType}` : '')}`);

  return (
    <div className={divClasses}>
      {
      label && (
        <label className="rf-label" htmlFor={selectId} aria-describedby={messageId}>
          {label}
          {hint && <span className="rf-hint-text" id={`${selectId}-desc-hint`}>{hint}</span>}
        </label>
      )}
      <select
        className={selectClasses}
        data-testid="select"
        disabled={disabled}
        id={selectId}
        name={name}
        onChange={onChange}
      >
        {
          options.map((opt) => (
            <option
              disabled={opt.disabled || false}
              hidden={opt.hidden || false}
              key={uuidv4()}
              selected={opt.selected || false}
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
};

Select.propTypes = {
  className: PropTypes.string,
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
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
  })).isRequired,
};

export default Select;
