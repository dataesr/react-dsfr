import React from 'react';
import PropTypes from 'prop-types';

const FooterTop = ({ children, align }) => (
  <div className="rf-footer__top">
    <div className="rf-container">
      <div className={`rf-grid-row rf-grid-row--${align} rf-grid-row--gutters`}>
        {children}
      </div>
    </div>
  </div>
);
FooterTop.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.oneOf(['center', 'start', 'end']),
};
FooterTop.defaultProps = {
  align: 'center',
};

export const FooterTopCategory = ({ children, category }) => {
  const links = React.Children.toArray(children)
    .filter((link) => link.type.name === 'FooterLink')
    .map((link) => React.cloneElement(link, { section: 'top' }));
  const childs = children.filter((link) => link.type.name !== 'FooterLink');
  return (
    <div className="rf-col-12 rf-col-sm-3 rf-col-md-2">
      <div className="rf-footer__top-cat">{category}</div>
      <ul className="rf-footer__top-list">
        {links}
        {childs}
      </ul>
    </div>
  );
};
FooterTopCategory.propTypes = {
  children: PropTypes.node.isRequired,
  category: PropTypes.string.isRequired,
};

export default FooterTop;
