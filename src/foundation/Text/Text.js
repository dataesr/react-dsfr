import PropTypes from 'prop-types';
import '@gouvfr/all/dist/css/all.min.css';

/**
 * Design system Text
 *
 * @visibleName Text
 */
const Text = ({
  as, size, alt, children,
}) => {
  const HtmlTag = `${as}`;
  const isAlt = alt ? ' rf-text--alt' : '';
  const textSize = (size !== 'md') ? `--${size}` : '';
  return <HtmlTag className={`rf-text${textSize}${isAlt}`}>{children}</HtmlTag>;
};

Text.propTypes = {
  /**
  * The actual text to display
  */
  children: PropTypes.string.isRequired,
  /**
  * html tag to render
  */
  as: PropTypes.oneOf(['p', 'span']),
  /**
  * Text size
  */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'lead']),
  /**
  * If true Spactral is used instead of Marianne.
  */
  alt: PropTypes.bool,
};
Text.defaultProps = {
  as: 'p',
  size: 'md',
  alt: false,
};

export default Text;
