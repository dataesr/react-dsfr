import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CLASS_NAME_TYPE } from '../../../utils/variables';
import HeaderContext from './headerContext';

const Service = (props) => {
  const context = useContext(HeaderContext);
  const {
    title, description, className,
  } = props;
  const {
    onOpenNav, searchButton, navButton, shortcutTools, isSearchBar, onOpenSearch, isNavBar,
  } = context;
  const { isMobile } = context;
  return (
    <div className={classnames(className, 'rf-header__navbar')}>
      <div className="rf-service">
        <a className="rf-service__title" href="/test" title={title}>
          {title}
        </a>
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
      {(shortcutTools.length > 0 || isNavBar) && isMobile && (
      <button
        onClick={onOpenNav}
        type="button"
        className="rf-btn rf-fi-menu-fill rf-btn--icon "
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
};

Service.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
};
export default Service;
