import classNames from 'classnames';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import './toggles.css';

/**
 *
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
  const _className = classNames('fr-toggle', {
    'fr-toggle--border-bottom': hasSeparator,
    'fr-toggle--label-left': hasLabelLeft,
  }, className);
  return (
    <div
      className={_className}
      data-testid="toggle"
    >
      <input
        data-testid="toggle-input"
        type="checkbox"
        checked={isChecked}
        disabled={isDisabled}
        onChange={() => onChange()}
        className="fr-toggle__input"
        id={_id}
      />
      <label
        className="fr-toggle__label"
        htmlFor={_id}
        data-fr-checked-label="Activé"
        data-fr-unchecked-label="Désactivé"
      >
        {label}
      </label>
      {description && <p className="fr-hint-text">{description}</p>}
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
  onChange: () => {},
};

Toggle.propTypes = {
  id: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  hasSeparator: PropTypes.bool,
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  hasLabelLeft: PropTypes.bool,
  description: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Toggle;
