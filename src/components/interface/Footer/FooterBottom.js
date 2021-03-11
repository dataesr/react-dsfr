import React from 'react';
import PropTypes from 'prop-types';

const FooterBottom = ({ children }) => {
  const links = React.Children.toArray(children)
    .filter((link) => link.type.name === 'FooterLink')
    .map((link) => React.cloneElement(link, { section: 'bottom' }));
  const childs = children.filter((link) => link.type.name !== 'FooterLink');
  return (
    <div className="rf-footer__bottom">
      <ul className="rf-footer__bottom-list">
        {links}
      </ul>
      {childs}
    </div>
  );
};
FooterBottom.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FooterBottom;
