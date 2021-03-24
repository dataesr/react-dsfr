import classNames from 'classnames';
import PropTypes from 'prop-types';

const Logo = ({ src, alt, className }) => (
  <div className={classNames(className, 'rf-header__operator')}>
    <img src={src} alt={alt} />
  </div>
);

Logo.defaultProps = {
  className: '',
};

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
};
export default Logo;
