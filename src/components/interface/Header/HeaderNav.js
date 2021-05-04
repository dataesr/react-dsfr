import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import HeaderContext from './headerContext';

const HeaderNav = ({
  className, children, closeButtonLabel,
}) => {
  const {
    isOpenNav, onOpenNav, isMobile, shortcutClassName,
  } = useContext(HeaderContext);
  const _className = classNames(className, 'fr-header__menu fr-modal', {
    'fr-modal--opened': isOpenNav,
  });
  return (
    <div className={_className}>
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
            {children}
          </ul>
        </nav>
      </div>
    </div>
  );
};

HeaderNav.defaultProps = {
  className: '',
  closeButtonLabel: 'Fermer',
};

HeaderNav.propTypes = {
  closeButtonLabel: PropTypes.string,
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
