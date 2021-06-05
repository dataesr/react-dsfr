import React, { useContext, cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

import HeaderContext from './headerContext';

const HeaderNav = ({
  className, children, closeButtonLabel, path, ...remainingProps
}) => {
  const {
    isOpenNav, onOpenNav, isMobile, shortcutClassName,
  } = useContext(HeaderContext);
  const _className = classNames(className, 'fr-header__menu fr-modal', {
    'fr-modal--opened': isOpenNav,
  });

  return (
    <div
      className={_className}
      {...dataAttributes(remainingProps)}
    >
      <div className="fr-container">
        <button
          onClick={() => onOpenNav(false)}
          title={closeButtonLabel}
          className="fr-link--close fr-link"
          type="button"
          aria-label="fermer la navigation"
        >
          {closeButtonLabel}
        </button>
        {isMobile && (
        <div className="fr-header__menu-links">
          <ul className={classNames(shortcutClassName, 'fr-links-group')} />
        </div>
        )}
        <nav
          id="header-navigation"
          className="fr-nav"
          role="navigation"
          aria-label="Menu principal"
        >
          <ul className="fr-nav__list">
            {children.map((child) => cloneElement(child, { key: uuidv4(), path }))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

HeaderNav.defaultProps = {
  __TYPE: 'HeaderNav',
  className: '',
  path: '',
  closeButtonLabel: 'Fermer',
};

HeaderNav.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('HeaderNav'),
  closeButtonLabel: PropTypes.string,
  path: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default HeaderNav;
