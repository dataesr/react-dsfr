import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import dataAttributes from '../../../utils/data-attributes';

const FooterPartnersTitle = ({
  as, children, className, ...remainingProps
}) => {
  const Tag = `${as}`;
  return (
    <Tag
      className={classNames('fr-footer__partners-title', className)}
      {...dataAttributes(remainingProps)}
    >
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
