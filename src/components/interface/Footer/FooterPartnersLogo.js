import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Link from '../Link';

const FooterPartnersLogo = ({
  href, imageSrc, imageAlt, className,
}) => {
  if (!href) {
    return (
      <img
        className={classNames('fr-footer__logo', className)}
        src={imageSrc}
        alt={imageAlt}
      />
    );
  }
  return (
    <Link
      className={classNames('footer__partners-link', className)}
      href={href}
    >
      <img className="fr-footer__logo" src={imageSrc} alt={imageAlt} />
    </Link>
  );
};

FooterPartnersLogo.propTypes = {
  href: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
FooterPartnersLogo.defaultProps = {
  href: '',
  imageSrc: '',
  className: '',
};

export default FooterPartnersLogo;
