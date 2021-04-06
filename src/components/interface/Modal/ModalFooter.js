import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalFooter = ({ children, className }) => (
  <div className={classNames('rf-modal__footer', className)}>
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
