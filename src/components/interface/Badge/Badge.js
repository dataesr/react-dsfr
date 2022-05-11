import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import dataAttributes from '../../../utils/data-attributes';

/*
* DSFR v1.5.0
*/
import '@gouvfr/dsfr/dist/component/badge/badge.css';
import colorFamilies from '../../../utils/variables';

/**
 *
 * @visibleName Badge
 */
const Badge = ({
  className,
  type,
  colorFamily,
  small,
  text,
  icon,
  ...remainingProps
}) => {
  const _className = classNames(
    'fr-badge',
    {
      [`fr-badge--${type}`]: type,
      [`fr-badge--${colorFamily}`]: colorFamily,
      'fr-badge--no-icon': !icon || !type,
      'fr-badge--sm': small,
    },
    className,
  );

  return (
    <p
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      {text}
    </p>
  );
};

Badge.defaultProps = {
  small: false,
  icon: true,
  className: '',
  colorFamily: '',
  type: '',
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.bool,
  small: PropTypes.bool,
  colorFamily: PropTypes.oneOf([...colorFamilies, '']),
  type: PropTypes.oneOf(['success', 'error', 'warning', 'new', 'info', '']),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default Badge;
