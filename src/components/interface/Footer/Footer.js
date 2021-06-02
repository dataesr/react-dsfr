import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

import './footer.css';

const Footer = ({ children, className, ...remainingProps }) => {
  const top = children.filter((child) => child.type.name === 'FooterTop');
  const rest = children.filter((child) => child.type.name !== 'FooterTop');
  const _className = classNames('fr-footer', className);
  return (
    <footer
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
