import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

const FooterCopy = ({ children, className, ...remainingProps }) => (
  <div
    className={classNames('fr-footer__bottom-copy', className)}
    {...dataAttributes(remainingProps)}
  >
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
