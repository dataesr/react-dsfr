import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import Col from '../../foundation/grid/Col';
import typeValidation from '../../../utils/type-validation';

const FooterTopCategory = ({
  children, title, n, offset, className, ...remainingProps
}) => {
  const childrenArray = Children.toArray(children);
  const links = childrenArray
    .filter((link) => link && link.props.__TYPE === 'FooterLink')
    .map((link) => cloneElement(link, { section: 'top' }));
  const childs = childrenArray.filter((link) => link.props.__TYPE !== 'FooterLink');
  return (
    <Col
      n={n}
      offset={offset}
      className={classNames(className)}
      {...dataAttributes.getAll(remainingProps)}
    >
      <div className="fr-footer__top-cat">{title}</div>
      <ul className="fr-footer__top-list">
        {links}
        {childs}
      </ul>
    </Col>
  );
};

FooterTopCategory.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('FooterTopCategory'),
  title: PropTypes.string.isRequired,
  n: PropTypes.string,
  offset: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};
FooterTopCategory.defaultProps = {
  __TYPE: 'FooterTopCategory',
  n: '12 sm-4 md-2',
  offset: null,
  className: '',
};

export default FooterTopCategory;
