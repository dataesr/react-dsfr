import classNames from 'classnames';
import PropTypes from 'prop-types';
import { CLASS_NAME_TYPE } from '../../../utils/variables';

/**
 * @visibleName Toggle
 */
const Toggle = ({
  className,
  hasSeparator,
  hasLabelLeft,
  label,
  description,
  isChecked,
  onChange,
}) => {
  const _className = classNames('rf-toggle', {
    'rf-toggle--border-bottom': hasSeparator,
    'rf-toggle--label-left': hasLabelLeft,
  }, className);
  return (
    <div className={_className}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange()}
        className="rf-toggle__input"
        id="toggle"
      />
      <label
        className="rf-toggle__label"
        htmlFor="toggle"
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
  className: '',
  isChecked: false,
  hasSeparator: false,
  hasLabelLeft: false,
  description: null,
};

Toggle.propTypes = {
  className: CLASS_NAME_TYPE,
  hasSeparator: PropTypes.bool,
  isChecked: PropTypes.bool,
  hasLabelLeft: PropTypes.bool,
  description: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Toggle;
