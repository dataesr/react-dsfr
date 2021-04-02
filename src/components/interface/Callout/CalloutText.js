import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '@gouvfr/dsfr/dist/css/callouts.min.css';

const CalloutText = ({ children, className }) => (
  <p className={classNames('rf-callout__text', className)}>
    {children}
  </p>
);

CalloutText.propTypes = {
  children: PropTypes.string.isRequired,
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
