import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const ModalFooter = ({ children, className, ...remainingProps }) => (
  <div
    className={classNames('fr-modal__footer', className)}
    {...dataAttributes.getAll(remainingProps)}
  >
    {children}
  </div>
);

ModalFooter.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('ModalFooter'),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
};
ModalFooter.defaultProps = { __TYPE: 'ModalFooter', className: '' };

export default ModalFooter;
