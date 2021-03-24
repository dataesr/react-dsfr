import PropTypes from 'prop-types';
import { Children, cloneElement } from 'react';
import classNames from 'classnames';
import Col from '../../foundation/grid/Col';

const FooterTopCategory = ({
  children, title, n, offset, className,
}) => {
  const links = Children.toArray(children)
    .filter((link) => link.type.name === 'FooterLink')
    .map((link) => cloneElement(link, { section: 'top' }));
  const childs = children.filter((link) => link.type.name !== 'FooterLink');
  return (
    <Col n={n} offset={offset} className={classNames(className)}>
      <div className="rf-footer__top-cat">{title}</div>
      <ul className="rf-footer__top-list">
        {links}
        {childs}
      </ul>
    </Col>
  );
};

FooterTopCategory.propTypes = {
  title: PropTypes.string.isRequired,
  n: PropTypes.string,
  offset: PropTypes.string,
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
FooterTopCategory.defaultProps = {
  n: '12 sm-4 md-2',
  offset: null,
  className: '',
};

export default FooterTopCategory;
