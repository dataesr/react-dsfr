import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useState, Children } from 'react';
import { CLASS_NAME_TYPE } from '../../../utils/variables';
import useViewport from '../../../hooks/useViewport';
import HeaderContext from './headerContext';
import HeaderNav from './HeaderNav';

const Header = ({
  children, className, isOpenNav, navTools, isOpenSearch, navItems,
}) => {
  const { width } = useViewport();
  const [openSearch, setOpenSearch] = useState(isOpenSearch || false);
  const [openNav, setOpenNav] = useState(isOpenNav || false);

  const arrayChildren = Children.toArray(children);
  let isSearchBar = false;

  arrayChildren.forEach((headerChild) => {
    if (headerChild.type.name === 'HeaderBody') {
      const tools = Children.toArray(headerChild.props.children).filter((bodyChild) => (bodyChild ? bodyChild.type.name === 'Tools' : false));
      if (tools.length > 0) {
        [isSearchBar] = tools.map((toolsChildren) => !!toolsChildren.props.children);
      }
    }
  });

  const contextProps = {
    isNavBar: navItems || navTools,
    isMobile: width < 768,
    isSearchBar,
    navTools,
    isOpenSearch: openSearch,
    onOpenSearch: () => {
      setOpenSearch(!openSearch);
    },
    isOpenNav: openNav,
    onOpenNav: () => {
      setOpenNav(!openNav);
    },
  };

  return (
    <HeaderContext.Provider value={contextProps}>
      <header
        className={classnames(className, 'rf-header')}
        role="banner"
      >
        <div className="rf-container">
          {children && children}
        </div>
        <div className="rf-container">
          {(navItems || navTools) && <HeaderNav navItems={navItems} />}
        </div>
      </header>
    </HeaderContext.Provider>
  );
};

Header.defaultProps = {
  className: '',
  isOpenNav: false,
  isOpenSearch: false,
  navTools: null,
  navItems: null,
};

Header.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    subItems: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })),
  })),
  /**
   * Ouverture de la popin de recherche en mobile
   */
  isOpenSearch: PropTypes.bool,
  /**
   * Raccourcis outils
   */
  navTools: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })),
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
