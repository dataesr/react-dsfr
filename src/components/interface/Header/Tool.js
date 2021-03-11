import classnames from 'classnames';
import PropTypes from 'prop-types';
import { useContext, Children } from 'react';
import { CHILDREN_TYPE, CLASS_NAME_TYPE } from '../../../utils/variables';
import HeaderContext from './headerContext';

const Tool = ({
  children, className, buttonClose,
}) => {
  const context = useContext(HeaderContext);
  const {
    isOpenSearch, onOpenSearch, isMobile,
  } = context;

  const navSearch = Children.toArray(children).filter((child) => child.type.name !== 'Tool');
  return (
    <div
      id={isMobile && navSearch.length > 0 ? 'header-tools-popin' : ''}
      className={classnames('rf-header__tools', className,
        {
          'rf-header__popin': isMobile && navSearch.length > 0,
          'rf-header__popin--expanded': isOpenSearch,
        })}
    >
      {navSearch}
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
Tool.defaultProps = {
  className: '',
  buttonClose: 'Fermer',
};

Tool.propTypes = {
  /**
   * One of: node, arrayOf(node), string
   */
  children: CHILDREN_TYPE.isRequired,
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
  buttonClose: PropTypes.string,
};
export default Tool;
