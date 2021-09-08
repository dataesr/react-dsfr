import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const FooterPartnersTitle = ({
  as, children, className, ...remainingProps
}) => {
  const Tag = `${as}`;
  return (
    <Tag
      className={classNames('fr-footer__partners-title', className)}
      {...dataAttributes.getAll(remainingProps)}
    >
      {children}
    </Tag>
  );
};
FooterPartnersTitle.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('FooterPartnersTitle'),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
FooterPartnersTitle.defaultProps = {
  __TYPE: 'FooterPartnersTitle',
  as: 'p',
  className: '',
};

export default FooterPartnersTitle;
