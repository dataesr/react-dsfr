import React from 'react';
import PropTypes from 'prop-types';
import Col from '../../foundation/grid/Col';

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

export const FooterTopCategory = ({
  children, title, n, offset,
}) => {
  const links = React.Children.toArray(children)
    .filter((link) => link.type.name === 'FooterLink')
    .map((link) => React.cloneElement(link, { section: 'top' }));
  const childs = children.filter((link) => link.type.name !== 'FooterLink');
  return (
    <Col n={n} offset={offset}>
      <div className="rf-footer__top-cat">{title}</div>
      <ul className="rf-footer__top-list">
        {links}
        {childs}
      </ul>
    </Col>
  );
};
FooterTopCategory.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  n: PropTypes.string,
  offset: PropTypes.string,
};
FooterTopCategory.defaultProps = {
  n: '12 sm-4 md-2',
  offset: null,
};

export default FooterTop;
