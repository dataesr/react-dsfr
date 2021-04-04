import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { deepFilter, deepForEach } from 'react-children-utilities';
import HeaderContext from './headerContext';

const Tool = ({
  children, className, buttonClose,
}) => {
  const searchBar = deepFilter(children, (child) => child.props && !!child.props.onSearch);
  let toolItemGroup = null;
  deepForEach(children, (child) => {
    if (child.type && child.type.name === 'ToolItemGroup') toolItemGroup = child;
  });
  const {
    isOpenSearch, onOpenSearch,
  } = useContext(HeaderContext);
  const _className = classNames('rf-header__tools rf-modal', {
    'rf-modal--opened': isOpenSearch,
  }, className);
  return (
    <div
      className={_className}
    >
      {isOpenSearch && (
      <button
        onClick={onOpenSearch}
        type="button"
        className="rf-link--close rf-link"
        title={buttonClose}
        aria-controls="header-tools-popin"
      >
        {buttonClose}
      </button>
      )}
      {!isOpenSearch && toolItemGroup}
      {searchBar}
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
