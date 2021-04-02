import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import useCollapse from '../../../hooks/useCollapse';

const SideMenuItem = ({
  children, expandedDefault, title, className,
}) => {
  const itemID = uuidv4();
  const [isExpanded, setExpanded] = useState(expandedDefault);
  const { item, collapse } = useCollapse(itemID, isExpanded);
  return (
    <li className={classNames('rf-sidemenu__item', className)}>
      <button
        type="button"
        onClick={() => setExpanded(!isExpanded)}
        className="rf-sidemenu__btn"
        aria-expanded={isExpanded}
        aria-controls={itemID}
      >
        {title}
      </button>
      <div
        className={item.class}
        id={itemID}
        data-testid={itemID}
        style={{ maxHeight: item.stateHeight, '--collapse': collapse }}
      >
        <ul className="rf-sidemenu__list">
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
