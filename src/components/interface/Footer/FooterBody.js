import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const FooterBody = ({
  children, description, className, ...remainingProps
}) => {
  const Logo = Children.toArray(children).filter(
    (child) => child.props.__TYPE === 'Logo',
  );
  const operator = Children.toArray(children).filter(
    (child) => child.props.__TYPE === 'FooterOperator',
  );
  const items = Children.toArray(children).filter(
    (child) => child.props.__TYPE === 'FooterBodyItem',
  );
  return (
    <div
      className={classNames('fr-footer__body', className)}
      {...dataAttributes.getAll(remainingProps)}
    >
      <div className="fr-footer__brand fr-enlarge-link">{Logo}</div>
      {operator}
      <div className="fr-footer__content">
        <p className="fr-footer__content-desc">{description}</p>
        <ul className="fr-footer__content-list">
          {items}
        </ul>
      </div>
    </div>
  );
};
FooterBody.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('FooterBody'),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  description: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
};
FooterBody.defaultProps = {
  __TYPE: 'FooterBody',
  className: '',
};

export default FooterBody;
