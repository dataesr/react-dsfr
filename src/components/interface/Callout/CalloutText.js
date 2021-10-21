import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

const CalloutText = ({
  children, className, size, ...remainingProps
}) => (
  <p
    className={classNames('fr-callout__text',
      {
        [`fr-text--${size}`]: size !== 'md',
        'fr-text': size === 'md',
      },
      className)}
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
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};
CalloutText.defaultProps = {
  className: '',
  size: 'lg',
};
export default CalloutText;
