import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';
import typeValidation from '../../../utils/type-validation';

const ModalContent = ({ children, className, ...remainingProps }) => (
  <div
    className={classNames(className)}
    {...dataAttributes.getAll(remainingProps)}
  >
    {children}

  </div>
);

ModalContent.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  __TYPE: typeValidation('ModalContent'),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.string,
};
ModalContent.defaultProps = { __TYPE: 'ModalContent', className: '' };

export default ModalContent;
