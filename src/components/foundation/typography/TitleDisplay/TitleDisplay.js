import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CLASS_NAME_TYPE } from '../../../../utils/types';

/**
 *
 * @visibleName TitleDisplay
 */
const TitleDisplay = ({
  as, size, children, className,
}) => {
  const HtmlTag = `${as}`;
  const _className = classNames(className, { [`rf-display-${size}`]: size });
  return (
    <HtmlTag className={_className}>
      {children}
    </HtmlTag>
  );
};

TitleDisplay.propTypes = {
  children: PropTypes.string.isRequired,
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
