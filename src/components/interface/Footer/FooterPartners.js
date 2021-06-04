import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const FooterPartners = ({ children, className, ...remainingProps }) => {
  const title = children.filter(
    (child) => child.props.__TYPE === 'FooterPartnersTitle',
  );
  const mainLogos = children.filter(
    (child) => child.props.__TYPE === 'FooterPartnersLogo' && child.props.isMain,
  );
  const subLogos = children.filter(
    (child) => child.props.__TYPE === 'FooterPartnersLogo' && !child.props.isMain,
  );
  return (
    <div
      className={classNames('fr-footer__partners', className)}
      {...dataAttributes(remainingProps)}
    >
      {title}
      <div className="fr-footer__partners-logos">
        {mainLogos && (
          <div className="fr-footer__partners-main">{mainLogos}</div>
        )}
        {subLogos && <div className="fr-footer__partners-sub">{subLogos}</div>}
      </div>
    </div>
  );
};
FooterPartners.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('FooterPartners'),
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
FooterPartners.defaultProps = {
  __TYPE: 'FooterPartners',
  className: '',
};

export default FooterPartners;
