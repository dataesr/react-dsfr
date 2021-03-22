import PropTypes from 'prop-types';
import { Children, cloneElement } from 'react';
import Col from '../../foundation/grid/Col';

const FooterTopCategory = ({
  children, title, n, offset,
}) => {
  const links = Children.toArray(children)
    .filter((link) => link.type.name === 'FooterLink')
    .map((link) => cloneElement(link, { section: 'top' }));
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

export default FooterTopCategory;
