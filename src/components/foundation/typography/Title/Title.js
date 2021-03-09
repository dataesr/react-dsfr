import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CLASS_NAME_TYPE } from '../../../../utils/variables';

/**
 *
 * @visibleName Title
 */
const Title = ({
  as, look, children, className,
}) => {
  const HtmlTag = `${as}`;
  const textLook = (look && look !== as) ? `rf-${look}` : `rf-${as}`;
  return (
    <HtmlTag className={classnames(className, textLook)}>
      {children}
    </HtmlTag>
  );
};

Title.propTypes = {
  children: PropTypes.string.isRequired,
  /**
   * One of: string, object
   */
  className: CLASS_NAME_TYPE,
  /**
  * html tag to render
  */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  look: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

Title.defaultProps = {
  look: 'h1',
  className: '',
};

export default Title;
