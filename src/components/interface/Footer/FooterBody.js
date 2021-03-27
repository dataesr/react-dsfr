import { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Link from '../Link';

const FooterBody = ({ children, description, className }) => {
  const brandLogo = Children.toArray(children).filter((child) => child.type.name === 'BrandLogo');
  return (
    <div className={classNames('rf-footer__body', className)}>
      <div className="rf-footer__brand">
        {brandLogo}
      </div>
      <div className="rf-footer__content">
        <p className="rf-footer__content-desc">{description}</p>
        <ul className="rf-footer__content-list">
          <li className="rf-footer__content-item">
            <Link className="rf-footer__content-link" href="https://legifrance.gouv.fr">legifrance.gouv.fr</Link>
          </li>
          <li className="rf-footer__content-item">
            <Link className="rf-footer__content-link" href="https://gouvernement.fr">gouvernement.fr</Link>
          </li>
          <li className="rf-footer__content-item">
            <Link className="rf-footer__content-link" href="https://service-public.fr">service-public.fr</Link>
          </li>
          <li className="rf-footer__content-item">
            <Link className="rf-footer__content-link" href="https://data.gouv.fr">data.gouv.fr</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
FooterBody.propTypes = {
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
FooterBody.defaultProps = { className: '' };

export default FooterBody;
