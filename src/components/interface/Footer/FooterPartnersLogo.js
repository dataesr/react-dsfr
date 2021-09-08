import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from '../Link/index';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const FooterPartnersLogo = ({
  href, imageSrc, imageAlt, className, asLink, ...remainingProps
}) => {
  if (!href && !asLink) {
    return (
      <img
        className={classNames('fr-footer__logo', className)}
        src={imageSrc}
        alt={imageAlt}
        {...dataAttributes.getAll(remainingProps)}
      />
    );
  }
  return (
    <Link
      as={asLink}
      className={classNames('footer__partners-link', className)}
      href={href}
      {...dataAttributes.getAll(remainingProps)}
    >
      <img
        className="fr-footer__logo"
        src={imageSrc}
        alt={imageAlt}
      />
    </Link>
  );
};

FooterPartnersLogo.defaultProps = {
  __TYPE: 'FooterPartnersLogo',
  href: '',
  imageSrc: '',
  className: '',
  asLink: null,
};

FooterPartnersLogo.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('FooterPartnersLogo'),
  href: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  asLink: PropTypes.element,
};

export default FooterPartnersLogo;
