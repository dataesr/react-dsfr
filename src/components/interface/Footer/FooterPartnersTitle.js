import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const FooterPartnersTitle = ({ as, children, className }) => {
  const Tag = `${as}`;
  return (
    <Tag className={classNames('rf-footer__partners-title', className)}>
      {children}
    </Tag>
  );
};
FooterPartnersTitle.propTypes = {
  children: PropTypes.string.isRequired,
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
FooterPartnersTitle.defaultProps = {
  as: 'p',
  className: '',
};

export default FooterPartnersTitle;
