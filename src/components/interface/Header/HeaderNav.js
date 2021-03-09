import classnames from 'classnames';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from 'react';
import { CLASS_NAME_TYPE } from '../../../utils/variables';
import Link from '../Link';
import Navigation from '../Navigation/Navigation';
import HeaderContext from './headerContext';

const HeaderNav = ({
  className, navItems,
}) => {
  const context = useContext(HeaderContext);
  const {
    isOpenNav, onOpenNav, shortcutTools, isMobile,
  } = context;

  return (
    <nav
      className={classnames(className, 'rf-nav', {
        'rf-header__popin': isMobile,
        'rf-header__popin--expanded': isOpenNav,
      })}
      role="navigation"
      aria-label="Menu principal"
      id="header-nav-popin"
    >
      {isMobile && shortcutTools.length > 0 && (
        <div className="rf-shortcuts">
          <ul className="rf-shortcuts__list">
            {shortcutTools.map((tool) => (
              <li className="rf-shortcuts__item" key={uuidv4()}>
                <Link isSimple icon={tool.icon || ''} iconPosition="left" href="/connect">{tool.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Navigation items={navItems} />
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
  );
};

HeaderNav.defaultProps = {
  className: '',
  navItems: [],
};

HeaderNav.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    subItems: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })),
  })),
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
};

export default HeaderNav;
