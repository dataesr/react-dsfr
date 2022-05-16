import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace } from '../../../../utils/getters';

/**
 *
 * @visibleName AltTitle
 */
const AltTitle = ({
  as, size, children, spacing, className,
}) => {
  const HtmlTag = `${as}`;
  const { margin, padding } = getSpace(spacing);

  const _className = classNames(className, padding, margin, { [`fr-display--${size}`]: size });
  return (
    <HtmlTag className={_className}>
      {children}
    </HtmlTag>
  );
};

AltTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  /**
     * html tag to render
     */
  spacing: PropTypes.string,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']).isRequired,
  size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']).isRequired,
};

AltTitle.defaultProps = {
  className: '',
  spacing: '',
};

export default AltTitle;
