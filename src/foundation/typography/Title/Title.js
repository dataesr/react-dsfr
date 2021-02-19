import PropTypes from 'prop-types';

/**
 * Design system Title
 *
 * @visibleName Title
 */
const Title = ({
  as, size, children, displaySize,
}) => {
  const HtmlTag = `${as}`;
  const display = (displaySize !== 'md') ? `rf-text--${displaySize}` : 'rf-text';
  const textSize = (size && size !== as) ? `rf-${size}` : `rf-${as}`;
  return <HtmlTag className={(displaySize) ? `${display}` : `${textSize}`}>{children}</HtmlTag>;
};

Title.propTypes = {
  /**
  * The actual title text to display
  */
  children: PropTypes.string.isRequired,
  /**
  * html tag to render
  */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /**
  * Modify the size of the title
  */
  size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /**
  * Alternative text sizes for display styled titles.
  */
  displaySize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'lead']),
};
Title.defaultProps = {
  as: 'h1',
  size: null,
  displaySize: null,
};

export default Title;
