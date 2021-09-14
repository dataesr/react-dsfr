import React, {
  useCallback, useState, useRef, Children, cloneElement,
} from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import dataAttributes from '../../../utils/data-attributes';
import Link from '../Link/index';
import useCollapse from '../../../hooks/useCollapse';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

const MegaNavItem = ({
  children, title, linkLabel, link, current, as, description, closeButtonLabel, ...remainingProps
}) => {
  const HTMLTag = `${as}`;
  const id = useRef(uuidv4());
  const [isExpanded, setIsExpanded] = useState(false);
  const { item, collapse } = useCollapse(null, isExpanded, 'fr-mega-menu');
  const expandedRef = useRef(null);
  const buttonRef = useRef(null);
  const close = useCallback((e) => {
    if ((buttonRef?.current !== e.target) && isExpanded) {
      setIsExpanded(false);
    }
  }, [isExpanded]);
  useOnClickOutside(expandedRef, close);

  const subItems = Children.toArray(children).map((child) => cloneElement(child, {
    onClick: () => {
      setIsExpanded(false);
    },
  }));

  return (
    <li
      className="fr-nav__item"
      {...dataAttributes.getAll(remainingProps)}
    >
      <button
        ref={buttonRef}
        onClick={() => setIsExpanded(!isExpanded)}
        type="button"
        aria-expanded={isExpanded}
        aria-controls={id.current}
        aria-current={current || undefined}
        className="fr-nav__btn"
        aria-label="ouvrir la navigation"
      >
        {title}
      </button>
      <div
        ref={expandedRef}
        id={id.current}
        className={item.class}
        style={{ maxHeight: item.stateHeight, '--collapse': collapse, padding: 0 }}
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
                <HTMLTag className="fr-h4 fr-mb-2v">{title}</HTMLTag>
                {description && <p className="fr-hidden fr-displayed-lg">{description}</p>}
                {link && linkLabel && (
                <Link
                  className="fr-link fr-fi-arrow-right-line fr-link--icon-right fr-link--align-on-content"
                  href={link}
                >
                  {linkLabel}
                </Link>
                )}
              </div>
            </div>
            {subItems}
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
