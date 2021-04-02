import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import HeaderContext from './headerContext';

const Tool = ({
  children, className, buttonClose,
}) => {
  const {
    isOpenSearch, onOpenSearch, isMobile,
  } = useContext(HeaderContext);
  const _className = classNames('rf-header__tools', {
    'rf-header__popin': isMobile,
    'rf-header__popin--expanded': isOpenSearch,
  }, className);
  return (
    <div
      id={isMobile ? 'header-tools-popin' : ''}
      className={_className}
    >
      {children}
      {isOpenSearch && (
      <button
        onClick={onOpenSearch}
        type="button"
        className="rf-btn rf-fi-close-line rf-btn--icon-right rf-btn--sm"
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  buttonClose: PropTypes.string,
};
export default Tool;
