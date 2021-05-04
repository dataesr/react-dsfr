import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

const MegaNavSubItem = ({
  children, title, link,
}) => {
  const childs = Children.toArray(children).map((child) => cloneElement(child, { className: 'fr-nav__link' }));
  return (
    <div className="fr-col-12 fr-col-lg-3">
      <h5 className="fr-mega-menu__category">
        <a className="fr-nav__link" href={link} target="_self">{title}</a>
      </h5>
      <ul className="fr-mega-menu__list">
        {childs.map((child) => <li key={uuidv4()}>{child}</li>)}
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
