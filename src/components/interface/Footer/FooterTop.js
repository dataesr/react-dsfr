import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const FooterTop = ({
  children, align, className, ...remainingProps
}) => (
  <div
    className={classNames('fr-footer__top', className)}
    {...dataAttributes.getAll(remainingProps)}
  >
    <div className="fr-container">
      <div className={`fr-grid-row fr-grid-row--${align} fr-grid-row--gutters`}>
        {children}
      </div>
    </div>
  </div>
);
FooterTop.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('FooterTop'),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  align: PropTypes.oneOf(['center', 'start', 'end']),
  className: PropTypes.string,
};
FooterTop.defaultProps = {
  __TYPE: 'FooterTop',
  align: 'center',
  className: '',
};

export default FooterTop;
