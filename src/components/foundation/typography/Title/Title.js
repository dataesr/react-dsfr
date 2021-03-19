import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CLASS_NAME_TYPE } from '../../../../utils/types';

/**
 *
 * @visibleName Title
 */
const Title = ({
  as, look, children, className,
}) => {
  const HtmlTag = `${as}`;
  const _className = classNames(className, {
    [`rf-${look}`]: (look !== as),
    [`rf-${as}`]: (look === as),
  });
  return (
    <HtmlTag className={_className}>
      {children}
    </HtmlTag>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  /**
  * html tag to render
  */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  look: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  className: CLASS_NAME_TYPE,
};

Title.defaultProps = {
  look: 'h1',
  className: '',
};

export default Title;
