import PropTypes from 'prop-types';
import Logo from '../Logo';

const FooterBody = ({ brand, description }) => (
  <div className="rf-footer__body">
    <div className="rf-footer__brand">
      <Logo>{brand}</Logo>
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
FooterBody.propTypes = {
  brand: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
};

export default FooterBody;
