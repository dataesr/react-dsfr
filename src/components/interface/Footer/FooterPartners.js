import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link';

const FooterPartners = ({ children, className }) => {
  const title = children.filter((child) => child.type.name === 'FooterPartnersTitle');
  const mainLogos = children.filter(
    (child) => ((child.type.name === 'FooterPartnersLogo') && child.props.isMain),
  );
  const subLogos = children.filter(
    (child) => ((child.type.name === 'FooterPartnersLogo') && !child.props.isMain),
  );
  return (
    <div className={classNames('rf-footer__partners', className)}>
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

export const FooterPartnersTitle = ({ as, children, className }) => {
  const Tag = `${as}`;
  return (
    <Tag className={classNames('rf-footer__partners-title', className)}>
      {children}
    </Tag>
  );
};
FooterPartnersTitle.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
FooterPartnersTitle.defaultProps = {
  as: 'p',
  className: '',
};

export const FooterPartnersLogo = ({
  href, imageSrc, imageAlt, className,
}) => {
  if (!href) {
    return (
      <img className={classNames('rf-footer__logo', className)} src={imageSrc} alt={imageAlt} />
    );
  }
  return (
    <Link className={classNames('footer__partners-link', className)} href={href}>
      <img className="rf-footer__logo" src={imageSrc} alt={imageAlt} />
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

export default FooterPartners;
