import React from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../foundation/icon/index';

import dataAttributes from '../../../utils/data-attributes';
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
  isSmall,
  text,
  icon,
  hasIcon,
  ...remainingProps
}) => {
  const _className = classNames(
    'fr-badge',
    {
      [`fr-badge--${type}`]: type,
      [`fr-badge--${colorFamily}`]: colorFamily,
      'fr-badge--no-icon': !hasIcon || !type,
      'fr-badge--sm': isSmall,
    },
    className,
  );

  const iconsType = {
    success: 'ri-checkbox-circle-fill',
    error: 'ri-settings-6-fill',
    info: 'ri-information-fill',
    warning: 'ri-error-warning-fill',
    new: 'ri-flashlight-fill',
  };

  const renderContent = () => {
    let content = text;

    if (hasIcon || icon) {
      content = (
        <Icon
          verticalAlign="sub"
          name={icon || iconsType[type]}
          size="lg"
          className="ds-fr-badge-icon"
        >
          {text}
        </Icon>
      );
    }
    return content;
  };

  return (
    <p
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      {renderContent()}
    </p>
  );
};

Badge.defaultProps = {
  isSmall: false,
  hasIcon: false,
  className: '',
  colorFamily: '',
  type: 'new',
  icon: '',
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  hasIcon: PropTypes.bool,
  isSmall: PropTypes.bool,
  colorFamily: PropTypes.oneOf([...colorFamilies, '']),
  type: PropTypes.oneOf(['success', 'error', 'warning', 'new', 'info']),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default Badge;
