import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SCHEMES } from '../../../utils/constants';

import '@gouvfr/dsfr/dist/css/highlights.min.css';

/**
 *
 * @visibleName Highlight
 */
const Highlight = ({
  scheme, size, children, className,
}) => {
  const _className = classNames('rf-highlight', {
    [`rf-highlight--scheme-${scheme}`]: scheme,
    [`rf-highlight--${size}`]: (['sm', 'lg'].includes(size)),
  }, className);
  return (
    <div className={_className} data-testid="highlight">
      {children}
    </div>
  );
};
Highlight.propTypes = {
  scheme: PropTypes.oneOf(SCHEMES),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
Highlight.defaultProps = {
  scheme: null,
  size: 'md',
  className: '',
};

export default Highlight;
