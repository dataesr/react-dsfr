import React, { Children } from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

/*
* DSFR v1.3.1
*/
import '@gouvfr/dsfr/dist/component/footer/footer.css';

const Footer = ({ children, className, ...remainingProps }) => {
  const top = Children.toArray(children).filter((child) => child.props.__TYPE === 'FooterTop');
  const rest = Children.toArray(children).filter((child) => child.props.__TYPE !== 'FooterTop');
  const _className = classNames('fr-footer', className);
  return (
    <footer
      id="footer"
      className={_className}
      role="contentinfo"
      {...dataAttributes.getAll(remainingProps)}
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
