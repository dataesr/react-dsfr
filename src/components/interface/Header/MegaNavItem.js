import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import Link from '../Link/index';

const MegaNavItem = ({
  children, title, linkLabel, link, current, as, description, closeButtonLabel,
}) => {
  const Tag = `${as}`;
  const [isExpanded, setIsExpanded] = useState(false);
  const [collapse, setCollapse] = useState('0px');

  const expandedItem = {
    false: {
      class: 'fr-mega-menu fr-collapse',
      stateHeight: null,
      ariaExpanded: 'false',
      expanded: false,
    },
    true: {
      class: 'fr-mega-menu fr-collapse fr-collapse--expanded',
      stateHeight: 'none',
      ariaExpanded: 'true',
      expanded: true,
    },
  };
  useEffect(() => {
    const menuHeight = document.querySelector('.fr-mega-menu');
    if (menuHeight) {
      setCollapse(menuHeight.getBoundingClientRect().height);
    }
  }, [collapse]);

  const item = expandedItem[isExpanded];

  return (
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
        className={item.class}
        style={{ maxHeight: item.stateHeight, '--collapse': `-${collapse}px`, padding: 0 }}
      >
        <div className="fr-container fr-container--fluid fr-container-lg">
          <button
            type="button"
            className="fr-link--close fr-link"
            aria-controls="mega-menu-775"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {closeButtonLabel}
          </button>
          <div className="fr-grid-row fr-grid-row-lg--gutters">
            <div className="fr-col-12 fr-col-lg-8 fr-col-offset-lg-4--right">
              <div className="fr-mega-menu__leader">
                <Tag className="fr-h4 fr-mb-2v">{title}</Tag>
                <p className="fr-hidden fr-displayed-lg">{description}</p>
                <Link
                  className="fr-link fr-fi-arrow-right-line fr-link--icon-right fr-link--align-on-content"
                  href={link}
                >
                  {linkLabel}
                </Link>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </li>
  );
};

MegaNavItem.defaultProps = {
  linkLabel: '',
  closeButtonLabel: 'Fermer',
  link: '',
  children: '',
  current: false,
  as: 'h4',
  description: '',
};
MegaNavItem.propTypes = {
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  title: PropTypes.string.isRequired,
  closeButtonLabel: PropTypes.string,
  linkLabel: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  current: PropTypes.bool,
};

export default MegaNavItem;
