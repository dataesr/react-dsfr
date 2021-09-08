import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

const CalloutTitle = ({
  as, children, className, ...remainingProps
}) => {
  const HtmlTitleTag = `${as}`;
  return (
    <HtmlTitleTag
      className={classNames('fr-callout__title', className)}
      {...dataAttributes.getAll(remainingProps)}
    >
      {children}
    </HtmlTitleTag>
  );
};

CalloutTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  as: PropTypes.oneOf(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
CalloutTitle.defaultProps = {
  as: 'p',
  className: '',
};
export default CalloutTitle;
