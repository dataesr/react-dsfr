import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '@gouvfr/dsfr/dist/css/callouts.min.css';

const CalloutTitle = ({ as, children, className }) => {
  const HtmlTitleTag = `${as}`;
  return (
    <HtmlTitleTag className={classNames('rf-callout__title', className)}>
      {children}
    </HtmlTitleTag>
  );
};

CalloutTitle.propTypes = {
  children: PropTypes.string.isRequired,
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
