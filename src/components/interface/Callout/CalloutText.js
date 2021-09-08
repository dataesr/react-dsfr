import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

const CalloutText = ({ children, className, ...remainingProps }) => (
  <p
    className={classNames('fr-callout__text', className)}
    {...dataAttributes.getAll(remainingProps)}
  >
    {children}
  </p>
);

CalloutText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
CalloutText.defaultProps = {
  className: '',
};
export default CalloutText;
