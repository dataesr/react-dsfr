import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CLASS_NAME_TYPE } from '../../../../utils/variables';

/**
 *
 * @visibleName TitleDisplay
 */
const TitleDisplay = ({
  as, size, children, className,
}) => {
  const HtmlTag = `${as}`;
  return (
    <HtmlTag className={classnames({
      className,
      [`rf-display-${size}`]: size,
    })}
    >
      {children}
    </HtmlTag>
  );
};

TitleDisplay.propTypes = {
  children: PropTypes.string.isRequired,
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
  /**
  * html tag to render
  */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  size: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']).isRequired,
};

TitleDisplay.defaultProps = {
  as: 'h1',
  className: '',
};

export default TitleDisplay;
