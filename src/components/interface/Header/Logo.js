import classnames from 'classnames';
import PropTypes from 'prop-types';
import { CLASS_NAME_TYPE } from '../../../utils/variables';

const Logo = ({ src, alt, className }) => (
  <div className={classnames(className, 'rf-header__operator')}>
    <img src={src} alt={alt} />
  </div>
);

Logo.defaultProps = {
  className: '',
};

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  /**
 * One of: string, object
 */
  className: CLASS_NAME_TYPE,
};
export default Logo;
