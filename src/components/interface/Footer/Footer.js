import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/css/footer.min.css';

const Footer = ({ children, className, ...remainingProps }) => {
  const top = children.filter((child) => child.props.__TYPE === 'FooterTop');
  const rest = children.filter((child) => child.props.__TYPE !== 'FooterTop');
  const _className = classNames('fr-footer', className);
  return (
    <footer
      id="footer"
      className={_className}
      role="contentinfo"
      {...dataAttributes(remainingProps)}
    >
      {top}
      <div className="fr-container">
        {rest}
      </div>
    </footer>
  );
};

Footer.defaultProps = { className: '' };

Footer.propTypes = {
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

export default Footer;
