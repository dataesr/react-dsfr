import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '@gouvfr/dsfr/dist/css/footer.min.css';

const Footer = ({ children, className }) => {
  const top = children.filter((child) => child.type.name === 'FooterTop');
  const rest = children.filter((child) => child.type.name !== 'FooterTop');
  const _className = classNames('rf-footer', className);
  return (
    <footer data-testid="footer" className={_className} role="contentinfo" id="footer">
      {top}
      <div className="rf-container">
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
