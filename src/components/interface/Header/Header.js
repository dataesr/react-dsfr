import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useState, Children } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { CLASS_NAME_TYPE } from '../../../utils/variables';
import useViewport from '../../../hooks/useViewport';
import HeaderContext from './headerContext';

const Header = ({
  children, className, isOpenNav, shortcutTools, isSearchBar, isOpenSearch, isNavBar,
}) => {
  const { width } = useViewport();
  const [openSearch, setOpenSearch] = useState(isOpenSearch || false);
  const [openNav, setOpenNav] = useState(isOpenNav || false);

  const addProps = {
    isNavBar,
    isMobile: width < 768,
    isSearchBar,
    shortcutTools,
    isOpenSearch: openSearch,
    onOpenSearch: () => {
      setOpenSearch(!openSearch);
    },
    isOpenNav: openNav,
    onOpenNav: () => {
      setOpenNav(!openNav);
    },
  };

  const elements = Children.toArray(children).map((element) => (
    <div className="rf-container" key={uuidv4()}>
      {element}
    </div>
  ));
  // TODO add animation
  return (
    <HeaderContext.Provider value={addProps}>
      <header
        className={classnames(className, 'rf-header')}
        role="banner"
      >
        {children && elements}
      </header>
    </HeaderContext.Provider>
  );
};

Header.defaultProps = {
  className: '',
  isOpenNav: false,
  isNavBar: false,
  isOpenSearch: false,
  isSearchBar: false,
  shortcutTools: [],
};

Header.propTypes = {
  isNavBar: PropTypes.bool,
  isSearchBar: PropTypes.bool,
  isOpenSearch: PropTypes.bool,
  shortcutTools: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
  })),
  isOpenNav: PropTypes.bool,
  children: PropTypes.node.isRequired,
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
};

export default Header;
