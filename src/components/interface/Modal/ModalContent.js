import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

const ModalContent = ({ children, className, ...remainingProps }) => (
  <div
    className={classNames(className)}
    {...dataAttributes(remainingProps)}
  >
    {children}

  </div>
);

ModalContent.propTypes = {
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
ModalContent.defaultProps = { className: '' };

export default ModalContent;
