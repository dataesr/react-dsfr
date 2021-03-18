import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import useCollapse from '../../../hooks/useCollapse';

const SideMenuItem = ({ children, expandedDefault, title }) => {
  const itemID = uuidv4();
  const [isExpanded, setExpanded] = useState(expandedDefault);
  const { item, collapse } = useCollapse(itemID, isExpanded);
  return (
    <li className="rf-sidemenu__item">
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
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  expandedDefault: PropTypes.bool,
};
SideMenuItem.defaultProps = {
  expandedDefault: false,
};
export default SideMenuItem;
