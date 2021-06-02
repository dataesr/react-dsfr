import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const FooterBody = ({
  children, description, className, ...remainingProps
}) => {
  const Logo = Children.toArray(children).filter(
    (child) => child.props.__TYPE === 'Logo',
  );
  return (
    <div
      className={classNames('fr-footer__body', className)}
      {...dataAttributes(remainingProps)}
    >
      <div className="fr-footer__brand">{Logo}</div>
      <div className="fr-footer__content">
        <p className="fr-footer__content-desc">{description}</p>
        <ul className="fr-footer__content-list">
          <li className="fr-footer__content-item">
            <Link
              className="fr-footer__content-link"
              href="https://legifrance.gouv.fr"
            >
              legifrance.gouv.fr
            </Link>
          </li>
          <li className="fr-footer__content-item">
            <Link
              className="fr-footer__content-link"
              href="https://gouvernement.fr"
            >
              gouvernement.fr
            </Link>
          </li>
          <li className="fr-footer__content-item">
            <Link
              className="fr-footer__content-link"
              href="https://service-public.fr"
            >
              service-public.fr
            </Link>
          </li>
          <li className="fr-footer__content-item">
            <Link
              className="fr-footer__content-link"
              href="https://data.gouv.fr"
            >
              data.gouv.fr
            </Link>
          </li>
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
  description: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
FooterBody.defaultProps = {
  __TYPE: 'FooterBody',
  className: '',
};

export default FooterBody;
