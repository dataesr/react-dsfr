import { Children } from 'react';
import PropTypes from 'prop-types';

const FooterBody = ({ children, description }) => {
  const brandLogo = Children.toArray(children).filter((child) => child.type.name === 'BrandLogo');
  return (
    <div className="rf-footer__body">
      <div className="rf-footer__brand">
        {brandLogo}
      </div>
      <div className="rf-footer__content">
        <p className="rf-footer__content-desc">{description}</p>
        <ul className="rf-footer__content-list">
          <li className="rf-footer__content-item">
            <a className="rf-footer__content-link" href="https://legifrance.gouv.fr">legifrance.gouv.fr</a>
          </li>
          <li className="rf-footer__content-item">
            <a className="rf-footer__content-link" href="https://gouvernement.fr">gouvernement.fr</a>
          </li>
          <li className="rf-footer__content-item">
            <a className="rf-footer__content-link" href="https://service-public.fr">service-public.fr</a>
          </li>
          <li className="rf-footer__content-item">
            <a className="rf-footer__content-link" href="https://data.gouv.fr">data.gouv.fr</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
FooterBody.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
};

export default FooterBody;
