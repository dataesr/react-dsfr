import { useState, useEffect, Children } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { CHILDREN_TYPE } from '../../../utils/variables';

const NavItem = ({ children, title, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [collapse, setCollapse] = useState('0px');

  const expandedItem = {
    false: {
      class: 'rf-menu rf-collapse',
      stateHeight: null,
      aria: 'false',
      expanded: false,
    },
    true: {
      class: 'rf-menu rf-collapse rf-collapse--expanded',
      stateHeight: 'none',
      aria: 'true',
      expanded: true,
    },
  };
  useEffect(() => {
    const menuHeight = document.querySelector('.rf-menu');
    if (menuHeight) {
      setCollapse(menuHeight.getBoundingClientRect().height);
    }
  }, [collapse]);

  const item = expandedItem[isExpanded];
  const subItems = Children.toArray(children).filter((child) => !!child);
  return (
    subItems && subItems.length > 0 ? (
      <li className="rf-nav__item">
        <button
          aria-controls={`rf-nav-${title}`}
          onClick={() => setIsExpanded(!isExpanded)}
          type="button"
          aria-expanded={item.aria}
          className="rf-btn"
        >
          {title}
        </button>
        <div
          id={`rf-nav-subitem-${uuidv4()}`}
          className={item.class}
          style={{ maxHeight: item.stateHeight, '--collapse': `-${collapse}px` }}
        >
          <ul className="rf-menu__list">
            {children}
          </ul>
        </div>
      </li>
    ) : (
      <li className="rf-nav__item">
        <a className="rf-link" href={link} target="_self">{title}</a>
      </li>

    )
  );
};

NavItem.defaultProps = {
  link: '',
  children: '',
};
NavItem.propTypes = {
  children: CHILDREN_TYPE,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default NavItem;
