import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import useCollapse from '../../../hooks/useCollapse';

import '@gouvfr/dsfr/dist/css/sidemenu.min.css';

/**
 *
 * @visibleName SideMenu
 */
const SideMenu = ({
  children, title, buttonLabel, className,
}) => {
  const itemID = uuidv4();
  const [isExpanded, setExpanded] = useState(false);
  const { item, collapse } = useCollapse(itemID, isExpanded);

  return (
    <nav className={classNames('rf-sidemenu', className)} aria-label="Menu latéral" data-testid="sidemenu">
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  title: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};
SideMenu.defaultProps = { className: '' };
export default SideMenu;
