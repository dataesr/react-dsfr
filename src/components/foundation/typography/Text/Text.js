import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 *
 * @visibleName Text
 */
const Text = ({
  as, size, alt, className, children,
}) => {
  const HtmlTag = `${as}`;
  const _className = classNames(className, {
    'rf-text--alt': size !== 'lead' && alt,
    [`rf-text--${size}`]: size !== 'md',
    'rf-text': size === 'md',
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
  /**
  * If true Spectral is used instead of Marianne.
  */
  alt: PropTypes.bool,
  children: PropTypes.string.isRequired,
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
};

export default Text;
