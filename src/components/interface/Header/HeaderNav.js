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
  const _className = classNames(className, 'rf-nav rf-modal', {
    'rf-modal--opened': isOpenNav,
  });
  return (
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
      <button
        onClick={onOpenNav}
        type="button"
        className="rf-link--close rf-link"
        title="Fermer"
        aria-controls="header-nav-popin"
      >
        {closeButtonLabel}
      </button>
      <ul className="rf-nav__list">
        {children}
      </ul>
    </nav>
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
