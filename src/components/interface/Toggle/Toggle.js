import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import dataAttributes from '../../../utils/data-attributes';

/*
* DSFR v1.2
*/
import '@gouvfr/dsfr/dist/component/toggle/toggle.min.css';

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
  toggleColor,
  onChange,
  description,
  ...remainingProps
}) => {
  const _id = useRef(id || uuidv4());
  const _className = classNames('fr-toggle', {
    'fr-toggle--border-bottom': hasSeparator,
    'fr-toggle--label-left': hasLabelLeft,
    'ds-fr-toggle': toggleColor && !remainingProps.disabled,
  }, className);

  useEffect(() => {
    _id.current = id || uuidv4();
  }, [id]);

  useEffect(() => {
    if (toggleColor) {
      document.documentElement.style.setProperty('--toggle-color', toggleColor);
    }
  }, [toggleColor]);

  return (
    <div
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      <input
        onChange={onChange}
        type="checkbox"
        className="fr-toggle__input"
        id={_id.current}
      />
      <label
        className="fr-toggle__label"
        htmlFor={_id.current}
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
  id: '',
  toggleColor: '',
  className: '',
  hasSeparator: false,
  hasLabelLeft: false,
  description: '',
  onChange: undefined,
};

Toggle.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  hasSeparator: PropTypes.bool,
  hasLabelLeft: PropTypes.bool,
  description: PropTypes.string,
  label: PropTypes.string.isRequired,
  toggleColor: PropTypes.string,
};

export default Toggle;
