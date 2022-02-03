import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace } from '../../../../utils/getters';

/**
 *
 * @visibleName Text
 */
const Text = ({
  as, size, alt, className, spacing, children,
}) => {
  const HtmlTag = `${as}`;
  const { margin, padding } = getSpace(spacing);
  const _className = classNames(className, padding, margin, {
    'fr-text--alt': size !== 'lead' && alt,
    [`fr-text--${size}`]: size,
  });
  return (
    <HtmlTag className={_className}>
      {children}
    </HtmlTag>
  );
};

Text.propTypes = {
  /**
  * html tag to render
  */
  as: PropTypes.oneOf(['p', 'span']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'lead']),
  spacing: PropTypes.string,
  /**
  * If true Spectral is used instead of Marianne.
  */
  alt: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
Text.defaultProps = {
  as: 'p',
  size: 'md',
  alt: false,
  className: '',
  spacing: '',
};

export default Text;
