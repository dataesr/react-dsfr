import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SCHEMES } from '../../../utils/constants';

import '@gouvfr/dsfr/dist/css/callouts.min.css';

/**
 *
 * @visibleName Callout
 */
const Callout = ({
  scheme, hasInfoIcon, children, className,
}) => {
  const _className = classNames('fr-callout', className, {
    'fr-fi-information-line': hasInfoIcon,
    [`fr-callout--scheme-${scheme}`]: scheme,
  });
  return (
    <div
      className={_className}
      data-testid="callout"
    >
      {children}
    </div>
  );
};
Callout.propTypes = {
  scheme: PropTypes.oneOf(SCHEMES),
  hasInfoIcon: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
Callout.defaultProps = {
  scheme: null,
  hasInfoIcon: true,
  className: '',
};

export default Callout;
