import React, {
  useCallback, useState, useEffect, useContext, useRef,
} from 'react';

import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import dataAttributes from '../../../utils/data-attributes';
import HeaderContext from './headerContext';
import useCollapse from '../../../hooks/useCollapse';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

const NavItemWithSubItem = ({
  children, title, link, path, current, asLink, ...remainingProps
}) => {
  const id = useRef(uuidv4());
  const [isExpanded, setIsExpanded] = useState(false);
  const { item, collapse } = useCollapse(null, isExpanded, 'fr-menu');
  const { currentPath, setCurrentPath } = useContext(HeaderContext);
  const expandedRef = useRef(null);
  const buttonRef = useRef(null);
  const close = useCallback((e) => {
    if ((buttonRef?.current !== e.target) && isExpanded) {
      setIsExpanded(false);
    }
  }, [isExpanded]);
  useOnClickOutside(expandedRef, close);

  useEffect(() => {
    if (path && path !== currentPath) {
      setCurrentPath(path);
    }
  }, [path, setCurrentPath, currentPath]);

  return (
    <li
      className="fr-nav__item"
      {...dataAttributes(remainingProps)}
    >
      <button
        ref={buttonRef}
        onClick={() => setIsExpanded(!isExpanded)}
        type="button"
        aria-expanded={isExpanded}
        aria-current={(current && 'page') || undefined}
        aria-controls={id.current}
        className="fr-nav__btn"
        aria-label="ouvrir la navigation"
      >
        {title}
      </button>
      <div
        ref={expandedRef}
        id={id.current}
        className={item.class}
        style={{ maxHeight: item.stateHeight, '--collapse': collapse }}
      >
        {/* eslint-disable-next-line max-len */}
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
        <ul className="fr-menu__list" onClick={() => setIsExpanded(false)}>
          {children}
        </ul>
      </div>
    </li>
  );
};

NavItemWithSubItem.defaultProps = {
  link: '',
  children: '',
  current: false,
  path: '',
  asLink: null,
};

NavItemWithSubItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  current: PropTypes.bool,
  asLink: PropTypes.element,
  /**
   * @ignore
   */
  path: PropTypes.string,
};

export default NavItemWithSubItem;
