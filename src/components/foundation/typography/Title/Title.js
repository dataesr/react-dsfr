import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getSpace } from '../../../../utils/getters';

/**
 *
 * @visibleName Title
 */
const Title = ({
  as, look, children, bold, spacing, className,
}) => {
  const HtmlTag = `${as}`;
  const { margin, padding } = getSpace(spacing);

  const _className = classNames(className, padding, margin, {
    [`fr-${look}`]: look && (look !== as),
    [`fr-${as}`]: (look === as) || !look,
    'fr-text--heavy': bold,
  });
  return (
    <HtmlTag className={_className}>
      {children}
    </HtmlTag>
  );
};

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
  * html tag to render
  */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  look: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', '']),
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  spacing: PropTypes.string,
  bold: PropTypes.bool,
};

Title.defaultProps = {
  look: '',
  className: '',
  spacing: '',
  bold: false,
};

export default Title;
