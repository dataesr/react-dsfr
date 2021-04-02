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
  const _className = classNames(className, 'rf-nav', {
    'rf-header__popin': isMobile,
    'rf-header__popin--expanded': isOpenNav,
  });
  return (
    <div className="rf-container">
      <nav
        className={_className}
        role="navigation"
        aria-label="Menu principal"
        id="header-nav-popin"
      >
        {isMobile && (
        <div className="rf-shortcuts">
          <ul className={classNames(shortcutClassName, 'rf-shortcuts__list')} />
        </div>
        )}
        <ul className="rf-nav__list">
          {children}
        </ul>
        {isMobile && (
        <button
          onClick={onOpenNav}
          type="button"
          className="rf-btn rf-fi-close-line rf-btn--icon-right rf-btn--sm"
          title="Fermer"
          aria-controls="header-nav-popin"
        >
            {closeButtonLabel}
        </button>
        )}
      </nav>
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
