import React, { useRef, useState } from 'react';

import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import useCollapse from '../../../hooks/useCollapse';
import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/css/sidemenu.min.css';

/**
 *
 * @visibleName SideMenu
 */
const SideMenu = ({
  children, title, buttonLabel, className, ...remainingProps
}) => {
  const itemID = useRef(uuidv4());
  const [isExpanded, setExpanded] = useState(false);
  const { item, collapse } = useCollapse(itemID, isExpanded);

  return (
    <nav
      className={classNames('fr-sidemenu', className)}
      aria-label="Menu latéral"
      {...dataAttributes(remainingProps)}
    >
      <div className="fr-sidemenu__inner">
        <button
          onClick={() => setExpanded(!isExpanded)}
          type="button"
          className="fr-sidemenu__btn"
          hidden={isExpanded}
          aria-controls={itemID.current}
          aria-expanded={isExpanded}
        >
          {buttonLabel}
        </button>
        <div
          className={item.class}
          id={itemID.current}
          style={{ maxHeight: item.stateHeight, '--collapse': collapse }}
        >
          {title && <div className="fr-sidemenu__title">{title}</div>}
          <ul className="fr-sidemenu__list">
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
  title: PropTypes.string,
  buttonLabel: PropTypes.string.isRequired,
};
SideMenu.defaultProps = { className: '', title: undefined };
export default SideMenu;
