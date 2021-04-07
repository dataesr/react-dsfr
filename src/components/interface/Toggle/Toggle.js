import classNames from 'classnames';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import '@gouvfr/dsfr/dist/css/toggles.min.css';

/**
 *
 * L’usage des interrupteurs est à privilégier pour paramétrer des fonctionnalités transverses.
 * Le changement d'état de l’interrupteur ne nécessite pas de validation
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
