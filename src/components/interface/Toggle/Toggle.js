import classNames from 'classnames';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { CLASS_NAME_TYPE } from '../../../utils/variables';

/**
 * @visibleName Toggle
 */
const Toggle = ({
  className,
  hasSeparator,
  hasLabelLeft,
  label,
  id,
  description,
  isChecked,
  isDisabled,
  onChange,
}) => {
  const _id = id || uuidv4();
  const _className = classNames('rf-toggle', {
    'rf-toggle--border-bottom': hasSeparator,
    'rf-toggle--label-left': hasLabelLeft,
  }, className);
  return (
    <div className={_className} data-testid="toggle">
      <input
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        onChange={() => onChange()}
        className="rf-toggle__input"
        id={_id}
        data-testid="toggle-input"
      />
      <label
        className="rf-toggle__label"
        htmlFor={_id}
        data-rf-checked-label="Activé"
        data-rf-unchecked-label="Désactivé"
      >
        {label}
      </label>
      {description && <p className="rf-hint-text">{description}</p>}
    </div>
  );
};

Toggle.defaultProps = {
  id: null,
  className: '',
  isChecked: false,
  isDisabled: false,
  hasSeparator: false,
  hasLabelLeft: false,
  description: null,
};

Toggle.propTypes = {
  id: PropTypes.string,
  className: CLASS_NAME_TYPE,
  hasSeparator: PropTypes.bool,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  hasLabelLeft: PropTypes.bool,
  description: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Toggle;
