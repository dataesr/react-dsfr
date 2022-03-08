import React, { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { deepFilter, deepForEach } from '../../../utils/children-utilities';
import dataAttributes from '../../../utils/data-attributes';
import HeaderContext from './headerContext';

const Tool = ({
  children, className, closeButtonLabel, ...remainingProps
}) => {
  const searchBar = deepFilter(children, (child) => child.props && !!child.props.onSearch);
  let toolItemGroup = null;
  deepForEach(children, (child) => {
    if (child.type && child.props.__TYPE === 'ToolItemGroup') toolItemGroup = child;
  });
  const {
    isOpenSearch, onOpenSearch,
  } = useContext(HeaderContext);
  const _className = classNames('fr-header__tools', className);
  return (
    <div
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      {!isOpenSearch && toolItemGroup}
      <div className={classNames('fr-header__search fr-modal', { 'fr-modal--opened': isOpenSearch })}>
        <div className="fr-container fr-container-lg--fluid">
          <button
            onClick={onOpenSearch}
            type="button"
            className="fr-link--close fr-link"
            title={closeButtonLabel}
            aria-controls="header-tools-popin"
          >
            {closeButtonLabel}
          </button>
          {searchBar}
        </div>
      </div>
    </div>
  );
};
Tool.defaultProps = {
  className: '',
  closeButtonLabel: 'Fermer',
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
  closeButtonLabel: PropTypes.string,
};
export default Tool;
