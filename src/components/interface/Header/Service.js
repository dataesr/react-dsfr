import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import HeaderContext from './headerContext';
import Link from '../Links';

const Service = ({
  title, description, className, link,
}) => {
  const context = useContext(HeaderContext);
  const {
    onOpenNav,
    searchButton,
    navButton,
    isSearchBar,
    onOpenSearch,
    isNavBar,
    isNavTool,
  } = context;
  const { isMobile } = context;
  return (
    <div className={classNames(className, 'rf-header__navbar')}>
      <div className="rf-service">
        <Link className="rf-service__title" href={link} title={title}>
          {title}
        </Link>
        <p className="rf-service__tagline">{description}</p>
      </div>
      {isSearchBar && isMobile && (
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
      {(isNavBar || isNavTool) && isMobile && (
        <button
          onClick={onOpenNav}
          type="button"
          className="rf-btn rf-fi-menu-fill rf-btn--icon"
          title={navButton}
          aria-controls="header-nav-popin"
        >
          {navButton}
        </button>
      )}
    </div>
  );
};

Service.defaultProps = {
  className: '',
  description: 'Ouvrir le menu',
  link: '/',
};

Service.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
export default Service;
