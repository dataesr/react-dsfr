import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FooterTop = ({ children, align, className }) => (
  <div className={classNames('fr-footer__top', className)}>
    <div className="fr-container">
      <div className={`fr-grid-row fr-grid-row--${align} fr-grid-row--gutters`}>
        {children}
      </div>
    </div>
  </div>
);
FooterTop.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  align: PropTypes.oneOf(['center', 'start', 'end']),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
FooterTop.defaultProps = {
  align: 'center',
  className: '',
};

export default FooterTop;
