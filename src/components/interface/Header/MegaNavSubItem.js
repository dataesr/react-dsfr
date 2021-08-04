import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import dataAttributes from '../../../utils/data-attributes';

const MegaNavSubItem = ({
  children, title, link, ...remainingProps
}) => {
  const childs = Children.toArray(children).map((child) => cloneElement(child, { className: 'fr-nav__link' }));
  return (
    <div
      className="fr-col-12 fr-col-lg-3"
      {...dataAttributes(remainingProps)}
    >
      <h5 className="fr-mega-menu__category">
        <a className="fr-nav__link" href={link} target="_self">{title}</a>
      </h5>
      <ul className="fr-mega-menu__list">
        {/* eslint-disable-next-line react/no-array-index-key */}
        {childs.map((child, index) => <li key={index}>{child}</li>)}
      </ul>
    </div>
  );
};

MegaNavSubItem.defaultProps = {
  title: '',
  link: '',
};

MegaNavSubItem.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
};

export default MegaNavSubItem;
