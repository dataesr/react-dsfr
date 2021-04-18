import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { deepForEach } from 'react-children-utilities';
import useViewport from '../../../hooks/useViewport';
import HeaderContext from './headerContext';

import './navigation.css';
import './header.css';

/**
 *
 * @visibleName Header
 */

const Header = ({
  children,
  className,
  isOpenNav,
  isOpenSearch,
}) => {
  const { width } = useViewport();
  const [openSearch, setOpenSearch] = useState(isOpenSearch || false);
  const [openNav, setOpenNav] = useState(isOpenNav || false);
  let isSearchBar = false;
  let isNavBar = false;
  let isNavTool = false;
  const isMobile = width < 992;

  deepForEach(children, (child) => {
    if (child.type.name === 'HeaderNav') {
      isNavBar = true;
    }
    if (child.type.name === 'ToolItemGroup') {
      isNavTool = true;
    }
    if (child && !!child.props.onSearch) {
      isSearchBar = true;
    }
  });
  const contextProps = {
    isNavBar,
    isNavTool,
    isMobile,
    isSearchBar,
    isOpenSearch: openSearch,
    onOpenSearch: () => setOpenSearch(!openSearch),
    isOpenNav: openNav,
    onOpenNav: () => setOpenNav(!openNav),
  };
  return (
    <HeaderContext.Provider value={contextProps}>
      <header
        className={classNames(className, 'fr-header')}
        role="banner"
      >
        {children}
        {isNavTool && !isNavBar && (
        <div className="fr-header__menu">
          <div className="fr-container">
            <div className="fr-header__menu-links" />
            <nav
              className="fr-nav"
              role="navigation"
              aria-label="Menu principal"
            >
              <button
                onClick={() => setOpenNav(false)}
                type="button"
                className="fr-link--close fr-link"
                title="Fermer"
                aria-controls="header-nav-popin"
              >
                OLD Fermer
              </button>
            </nav>
          </div>
        </div>
        )}
      </header>
    </HeaderContext.Provider>
  );
};

Header.defaultProps = {
  className: '',
  isOpenNav: false,
  isOpenSearch: false,
};

Header.propTypes = {
  /**
   * Ouverture de la popin de recherche en mobile
   */
  isOpenSearch: PropTypes.bool,
  /**
   * Ouverture de la popin de navigation en mobile
   */
  isOpenNav: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default Header;
