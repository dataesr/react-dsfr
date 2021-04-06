import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { deepFilter } from 'react-children-utilities';
import classNames from 'classnames';
import HeaderContext from './headerContext';

const HeaderBody = ({ children, className }) => {
  const elements = deepFilter(children, (child) => child.type && (child.type.name !== 'Logo' && child.type.name !== 'Service'));
  const logo = deepFilter(children, (child) => child.type && child.type.name === 'Logo');
  const service = deepFilter(children, (child) => child.type && child.type.name === 'Service');

  const context = useContext(HeaderContext);
  const {
    searchButton,
    isSearchBar,
    onOpenSearch,
    onOpenNav,
    navButton,
    isNavBar,
    isNavTool,
  } = context;

  return (
    <div className={classNames(className, 'rf-header__body')} role="banner">
      <div className="rf-header__brand">
        {logo}
        {service}
      </div>
      {(isNavBar || isNavTool) && (
      <div className="rf-header__navbar">
        <button
          onClick={onOpenNav}
          type="button"
          className="rf-btn rf-fi-menu-fill rf-btn--icon"
          title={navButton}
          aria-controls="header-nav-popin"
        >
          {navButton}
        </button>
        {isSearchBar && (
        <button
          onClick={onOpenSearch}
          type="button"
          className="rf-btn rf-fi-search-line rf-btn--icon "
          title={searchButton}
          aria-controls="header-tools-popin"
        >
          {searchButton}
        </button>
        )}
      </div>
      )}
      {elements}
    </div>
  );
};

HeaderBody.defaultProps = {
  className: '',
  children: '',
};

HeaderBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};

export default HeaderBody;
