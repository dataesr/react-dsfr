import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

const CalloutText = ({
  children, className, size, as, ...remainingProps
}) => {
  const HTMLTag = `${as}`;

  return (
    <HTMLTag
      className={classNames(
        'fr-callout__text',
        {
          [`fr-text--${size}`]: size,
        },
        className,
      )}
      {...dataAttributes.getAll(remainingProps)}
    >
      {children}
    </HTMLTag>
  );
};

CalloutText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.string,
  as: PropTypes.oneOf(['p', 'ul', 'div']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
};
CalloutText.defaultProps = {
  className: '',
  as: 'p',
  size: 'lg',
};
export default CalloutText;
