import React, { useState, useEffect, Children } from 'react';

import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Link from '../Link/index';

const NavItem = ({
  children, title, link, current,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [collapse, setCollapse] = useState('0px');

  const expandedItem = {
    false: {
      class: 'fr-menu fr-collapse',
      stateHeight: null,
      ariaExpanded: 'false',
      expanded: false,
    },
    true: {
      class: 'fr-menu fr-collapse fr-collapse--expanded',
      stateHeight: 'none',
      ariaExpanded: 'true',
      expanded: true,
    },
  };
  useEffect(() => {
    const menuHeight = document.querySelector('.fr-menu');
    if (menuHeight) {
      setCollapse(menuHeight.getBoundingClientRect().height);
    }
  }, [collapse]);

  const item = expandedItem[isExpanded];
  const subItems = Children.toArray(children).filter((child) => !!child);
  return subItems && subItems.length > 0 ? (
    <li className="fr-nav__item">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        type="button"
        aria-expanded={item.ariaExpanded}
        aria-current={current || undefined}
        className="fr-nav__btn"
        aria-label="ouvrir la navigation"
      >
        {title}
      </button>
      <div
        id={`fr-nav-subitem-${uuidv4()}`}
        className={item.class}
        style={{ maxHeight: item.stateHeight, '--collapse': `-${collapse}px` }}
      >
        <ul className="fr-menu__list">{children}</ul>
      </div>
    </li>
  ) : (
    <li className="fr-nav__item">
      <Link className="fr-nav__link" href={link} current={current}>
        {title}
      </Link>
    </li>
  );
};

NavItem.defaultProps = {
  link: '',
  children: '',
  current: false,
};
NavItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  current: PropTypes.bool,
};

export default NavItem;
