import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import useCollapse from '../../../hooks/useCollapse';

export const SideMenuLink = ({ children, href }) => (
  <li className="rf-sidemenu__item">
    <a className="rf-sidemenu__link" href={href} target="_self">{children}</a>
  </li>
);

SideMenuLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export const SideMenuItem = ({ children, expandedDefault, title }) => {
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

export const SideMenu = ({ children, title, buttonLabel }) => {
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
