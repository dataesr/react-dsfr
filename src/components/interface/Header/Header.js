import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { deepForEach } from 'react-children-utilities';
import { CLASS_NAME_TYPE } from '../../../utils/variables';
import useViewport from '../../../hooks/useViewport';
import HeaderContext from './headerContext';

const Header = ({
  children, className, isOpenNav, isOpenSearch,
}) => {
  const { width } = useViewport();
  const [openSearch, setOpenSearch] = useState(isOpenSearch || false);
  const [openNav, setOpenNav] = useState(isOpenNav || false);
  let isSearchBar = false;
  let isNavBar = false;
  let isNavTool = false;
  const isMobile = width < 768;

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
        className={classnames(className, 'rf-header')}
        role="banner"
      >
        {children}
        {isNavTool && !isNavBar && (
        <div className="rf-container">
          <nav
            className={classnames(className, 'rf-nav', {
              'rf-header__popin': isMobile,
              'rf-header__popin--expanded': openNav,
            })}
            role="navigation"
            aria-label="Menu principal"
            id="header-nav-popin"
          >
            {isMobile && (
            <div className="rf-shortcuts">
              <ul className="rf-shortcuts__list" />
            </div>
            )}
            {isMobile && (
            <button
              onClick={() => setOpenNav(false)}
              type="button"
              className="rf-btn rf-fi-close-line rf-btn--icon-right rf-btn--sm"
              title="Fermer"
              aria-controls="header-nav-popin"
            >
              Fermer
            </button>
            )}
          </nav>
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
  children: PropTypes.node.isRequired,
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
};

export default Header;
