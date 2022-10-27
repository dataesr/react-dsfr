import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

const CalloutTitle = ({
  as, children, className, size, ...remainingProps
}) => {
  const HtmlTitleTag = `${as}`;
  return (
    <HtmlTitleTag
      className={classNames('fr-callout__title', {
        [`fr-text--${size}`]: size,
      }, className)}
      {...dataAttributes.getAll(remainingProps)}
    >
      {children}
    </HtmlTitleTag>
  );
};

CalloutTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  className: PropTypes.string,
};
CalloutTitle.defaultProps = {
  as: 'p',
  size: 'lg',
  className: '',
};
export default CalloutTitle;
