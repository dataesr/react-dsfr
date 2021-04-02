import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FooterCopy = ({ children, className }) => (
  <div className={classNames('rf-footer__bottom-copy', className)}>
    {children}
  </div>
);
FooterCopy.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
FooterCopy.defaultProps = { className: '' };

export default FooterCopy;
