import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import useCollapse from '../../../hooks/useCollapse';

/**
 * Le menu latéral permet aux utilisateurs de naviguer entre les différentes pages d’une
 * rubrique ou d’un même thème.
 *
 * @visibleName SideMenu
 */
const SideMenu = ({ children, title, buttonLabel }) => {
  const itemID = uuidv4();
  const [isExpanded, setExpanded] = useState(false);
  const { item, collapse } = useCollapse(itemID, isExpanded);

  return (
    <nav className="rf-sidemenu" aria-label="Menu latéral" data-testid="sidemenu">
      <div className="rf-sidemenu__inner">
        <button
          onClick={() => setExpanded(!isExpanded)}
          type="button"
          className="rf-sidemenu__btn"
          hidden={isExpanded}
          aria-controls={itemID}
          aria-expanded={isExpanded}
        >
          {buttonLabel}
        </button>
        <div
          className={item.class}
          id={itemID}
          style={{ maxHeight: item.stateHeight, '--collapse': collapse }}
        >
          <div className="rf-sidemenu__title">{title}</div>
          <ul className="rf-sidemenu__list">
            {children}
          </ul>
        </div>
      </div>
    </nav>
  );
};

SideMenu.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};
export default SideMenu;
