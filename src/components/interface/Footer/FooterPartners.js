import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FooterPartners = ({ children, className }) => {
  const title = children.filter(
    (child) => child.type.name === 'FooterPartnersTitle',
  );
  const mainLogos = children.filter(
    (child) => child.type.name === 'FooterPartnersLogo' && child.props.isMain,
  );
  const subLogos = children.filter(
    (child) => child.type.name === 'FooterPartnersLogo' && !child.props.isMain,
  );
  return (
    <div className={classNames('fr-footer__partners', className)}>
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
FooterPartners.defaultProps = { className: '' };

export default FooterPartners;
