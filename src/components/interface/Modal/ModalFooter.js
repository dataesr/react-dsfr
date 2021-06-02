import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

const ModalFooter = ({ children, className, ...remainingProps }) => (
  <div
    className={classNames('fr-modal__footer', className)}
    {...dataAttributes(remainingProps)}
  >
    {children}
  </div>
);

ModalFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
ModalFooter.defaultProps = { className: '' };

export default ModalFooter;
