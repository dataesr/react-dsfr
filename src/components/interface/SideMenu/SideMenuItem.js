import React, { useRef, useState } from 'react';

import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import useCollapse from '../../../hooks/useCollapse';
import dataAttributes from '../../../utils/data-attributes';

const SideMenuItem = ({
  children, expandedDefault, title, className, ...remainingProps
}) => {
  const itemID = useRef(uuidv4());
  const [isExpanded, setExpanded] = useState(expandedDefault);
  const { item, collapse } = useCollapse(itemID, isExpanded);
  return (
    <li
      className={classNames('fr-sidemenu__item', className)}
      {...dataAttributes.getAll(remainingProps)}
    >
      <button
        type="button"
        onClick={() => setExpanded(!isExpanded)}
        className="fr-sidemenu__btn"
        aria-expanded={isExpanded}
        aria-controls={itemID.current}
      >
        {title}
      </button>
      <div
        className={item.class}
        id={itemID.current}
        style={{ maxHeight: item.stateHeight, '--collapse': collapse }}
      >
        <ul className="fr-sidemenu__list">
          {children}
        </ul>
      </div>
    </li>
  );
};

SideMenuItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  expandedDefault: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
SideMenuItem.defaultProps = {
  expandedDefault: false,
  className: '',
};
export default SideMenuItem;
