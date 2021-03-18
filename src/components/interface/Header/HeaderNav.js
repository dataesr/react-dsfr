import classNames from 'classnames';
import { useContext } from 'react';
import { CLASS_NAME_TYPE, CHILDREN_TYPE } from '../../../utils/types';
import HeaderContext from './headerContext';

const HeaderNav = ({
  className, children,
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
          Fermer
        </button>
        )}
      </nav>
    </div>
  );
};

HeaderNav.defaultProps = {
  className: '',
};

HeaderNav.propTypes = {
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
  children: CHILDREN_TYPE.isRequired,
};

export default HeaderNav;
