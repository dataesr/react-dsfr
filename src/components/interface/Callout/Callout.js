import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import dataAttributes from '../../../utils/data-attributes';

import '@gouvfr/dsfr/dist/css/callouts.min.css';

/**
 *
 * @visibleName Callout
 */
const Callout = ({
  hasInfoIcon, children, className, color, ...remainingProps
}) => {
  const calloutRef = useRef();
  const _className = classNames('fr-callout', className, {
    'fr-fi-information-line': hasInfoIcon,
  });

  useEffect(() => {
    if (color && calloutRef.current) {
      calloutRef.current.style.boxShadow = `inset .25rem 0 0 0 ${color}`;
    }
  }, [color]);

  return (
    <div
      ref={calloutRef}
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      {children}
    </div>
  );
};

Callout.defaultProps = {
  hasInfoIcon: true,
  className: '',
  color: '',
};

Callout.propTypes = {
  hasInfoIcon: PropTypes.bool,
  color: PropTypes.string,
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

export default Callout;
