import React, { Children, cloneElement } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

const FooterBottom = ({ children, className }) => {
  const links = Children.toArray(children)
    .filter((link) => link.type.name === 'FooterLink')
    .map((link) => cloneElement(link, { section: 'bottom' }));
  const childs = children.filter((link) => link.type.name !== 'FooterLink');
  return (
    <div className={classNames('fr-footer__bottom', className)}>
      <ul className="fr-footer__bottom-list">
        {links}
      </ul>
      {childs}
    </div>
  );
};
FooterBottom.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
FooterBottom.defaultProps = { className: '' };

export default FooterBottom;
