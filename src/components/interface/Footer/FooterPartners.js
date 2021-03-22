import PropTypes from 'prop-types';

const FooterPartners = ({ children }) => {
  const title = children.filter((child) => child.type.name === 'FooterPartnersTitle');
  const mainLogos = children.filter(
    (child) => ((child.type.name === 'FooterPartnersLogo') && child.props.isMain),
  );
  const subLogos = children.filter(
    (child) => ((child.type.name === 'FooterPartnersLogo') && !child.props.isMain),
  );
  return (
    <div className="rf-footer__partners">
      {title}
      <div className="rf-footer__partners-logos">
        {mainLogos && (
          <div className="rf-footer__partners-main">
            {mainLogos}
          </div>
        )}
        {subLogos && (
        <div className="rf-footer__partners-sub">
          {subLogos}
        </div>
        )}
      </div>
    </div>
  );
};
FooterPartners.propTypes = {
  children: PropTypes.node.isRequired,
};

export const FooterPartnersTitle = ({ as, children }) => {
  const Tag = `${as}`;
  return <Tag className="rf-footer__partners-title">{children}</Tag>;
};
FooterPartnersTitle.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};
FooterPartnersTitle.defaultProps = {
  as: 'p',
};

export const FooterPartnersLogo = ({
  href, imageSrc, imageAlt,
}) => {
  if (!href) return <img className="rf-footer__logo" src={imageSrc} alt={imageAlt} />;
  return (
    <a className="footer__partners-link" href={href}>
      <img className="rf-footer__logo" src={imageSrc} alt={imageAlt} />
    </a>
  );
};
FooterPartnersLogo.propTypes = {
  href: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string.isRequired,
};
FooterPartnersLogo.defaultProps = {
  href: '',
  imageSrc: '',
};

export default FooterPartners;
