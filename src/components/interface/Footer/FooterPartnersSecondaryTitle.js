import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const FooterPartnersSecondaryTitle = ({
  as, children, className, ...remainingProps
}) => {
  const HTMLTag = `${as}`;
  return (
    <HTMLTag
      className={classNames('fr-footer__partners-title', className)}
      {...dataAttributes.getAll(remainingProps)}
    >
      {children}
    </HTMLTag>
  );
};
FooterPartnersSecondaryTitle.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('FooterPartnersSecondaryTitle'),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.string,
};
FooterPartnersSecondaryTitle.defaultProps = {
  __TYPE: 'FooterPartnersSecondaryTitle',
  as: 'h4',
  className: '',
};

export default FooterPartnersSecondaryTitle;
