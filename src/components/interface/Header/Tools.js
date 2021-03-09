import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/variables';
import Link from '../Link';
import HeaderContext from './headerContext';

const Tools = (props) => {
  const context = useContext(HeaderContext);
  const {
    isSearchBar, isOpenSearch, onOpenSearch, isMobile, shortcutTools,
  } = context;
  const {
    children, className, buttonClose,
  } = props;
  return (
    <div
      id={isMobile && isSearchBar ? 'header-tools-popin' : ''}
      className={classnames('rf-header__tools', className,
        {
          'rf-header__popin': isMobile && isSearchBar,
          'rf-header__popin--expanded': isOpenSearch,
        })}
    >
      {!isMobile && shortcutTools.length > 0 && (
      <div className="rf-shortcuts">
        <ul className="rf-shortcuts__list">
          {shortcutTools.map((tool) => (
            <li className="rf-shortcuts__item" key={tool.title}>
              <Link
                isSimple
                icon={tool.icon || ''}
                iconPosition="left"
                href="/connect"
              >
                {tool.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      )}
      {isSearchBar && children && (
      <>
        {children}
      </>
      )}
      {isOpenSearch && (
      <button
        onClick={onOpenSearch}
        type="button"
        className="test rf-btn rf-fi-close-line rf-btn--icon-right rf-btn--sm"
        title={buttonClose}
        aria-controls="header-tools-popin"
      >
        {buttonClose}
      </button>
      )}
    </div>
  );
};
Tools.defaultProps = {
  className: '',
  children: '',
  buttonClose: 'Fermer',
};

Tools.propTypes = {
  /**
   * One of: node, arrayOf(node), string
   */
  children: CHILDREN_TYPE,
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
  buttonClose: PropTypes.string,
};
export default Tools;
